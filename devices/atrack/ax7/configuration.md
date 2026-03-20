---
slug: /atrack/ax7/configuration
id: ax7-configuration
sidebar_label: Configuration
title: ATrack - AX7 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect the ATrack AX7 tracker to Plaspy with server settings and example commands
keywords:
  - ATrack AX7 configuration
  - AX7 setup Plaspy
  - ATrack AX7 guide
  - AX7 server settings
  - AX7 GPRS configuration
  - ATrack GPS tracker
  - AX7 OBDII tracker
  - Plaspy tracker setup
  - vehicle tracking AX7
  - AX7 configuration commands
---

# ATrack - AX7 Configuration

This page describes the public configuration context for using the ATrack AX7 tracker with Plaspy. It consolidates the Plaspy server settings you must apply to the device, provides a practical workflow, and includes example device commands where public configuration commands are available.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use this page together with the AX7 manufacturer documentation and your installation procedures.

## Configuration Overview

This configuration process prepares the AX7 to send location and event data to Plaspy so devices become visible and manageable on the platform. Below you will find the server endpoint details required by Plaspy, a typical workflow to apply settings, and public example commands shown in the manufacturer-supplied format.

- Configure the AX7 to use the Plaspy server endpoint so data is routed to your Plaspy account.
- Set the device transport (UDP or TCP) and port so the tracker can establish a GPRS session to Plaspy.
- Enable periodic and event-based reporting (for example a 60 second tracking interval and ACC events).
- Verify GPRS APN and connectivity so the device can reach Plaspy from the mobile network.
- Validate the device is reporting to Plaspy and check device status using the AX7 status command.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: supported over UDP or TCP; choose the transport required by your deployment
- Plaspy automatically detects the tracker protocol for incoming device connections

## Typical Requirements Before Setup

- Physical access to the vehicle OBDII port or the installed AX7 device for configuration or reboot.
- An active SIM card with data enabled and the correct APN credentials for the mobile operator.
- Access to the AX7 manufacturer configuration method or software; retain manufacturer instructions.
- Knowledge of the device IMEI or identifier so you can confirm which unit is reporting to Plaspy.
- A Plaspy account and platform access to check that the device is visible after configuration.
- Basic familiarity with the AX7 command interface or the vendor tool used to send configuration commands.

## How This Tracker Connects to Plaspy

The AX7 is configured to open a GPRS session and send position and event data to the shared Plaspy endpoint and port. Plaspy receives device traffic on the same port for all supported trackers and determines the device protocol automatically.

- Periodic tracking reports sent on the configured interval (for example 60 seconds).
- Event driven reporting such as ACC on/off events can be enabled to reduce reporting when idle.
- Device format can be set to a binary or platform-compatible mode prior to sending data.
- The AX7 establishes a GPRS connection to the Plaspy server IP or domain over TCP or UDP on port 8888.
- Plaspy processes incoming packets and maps the device by protocol and identifier so it appears in the platform.

## Common Configuration Workflow

1. Access the official ATrack configuration method or software for the AX7 (manufacturer tool, serial interface, or supported remote command channel).
2. Enter the Plaspy server domain d.plaspy.com or the IP address 54.85.159.138 in the device server configuration.
3. Set the server port to 8888 as required by Plaspy.
4. Choose UDP or TCP transport if the device requires you to specify the transport protocol.
5. Provide the mobile operator APN credentials and any SIM related settings required by the AX7 for GPRS connectivity.
6. Apply or save the configuration and restart the device if required by the AX7 workflow.
7. Validate that the device reports to Plaspy and appears in the platform using your Plaspy account.

## Example Configuration Commands

The following example commands are provided in the public manufacturer configuration content for the AX7. These commands are shown in the order given by the manufacturer. Replace placeholders with your operator APN details where required.

- Configure ACC event reporting and actions
```
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Set tracking interval to 60 seconds
```
AT$TRAC=1,60,,,,,2
```

- Set data format to binary mode
```
AT$FORM=1,@P,0,""
```

- Configure GPRS server to Plaspy using APN placeholders and Plaspy server IP and port
```
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```
Note: [apn] is the operator APN name. [apnu] and [apnp] are optional APN username and APN password placeholders. Replace these placeholders with the SIM operator credentials required by your mobile service.

- Check device status
```
AT$INFO=?
```

## Configuration Notes

- Firmware and hardware revisions may change available commands and parameter order; always verify commands with the AX7 manufacturer documentation.
- The AT$GPRS line in the example uses Plaspy server IP and port 8888. You may alternatively enter d.plaspy.com in vendor tools that accept a domain name.
- Choose UDP or TCP based on installation needs; Plaspy accepts both transports and auto-detects protocol behavior.
- Keep APN credentials secure and verify data connectivity before relying on production tracking.
- If your installation uses a vendor service or integrator tool, follow their recommended method to write the above parameters to the device.

## Why Use Plaspy with This Configuration

Using Plaspy with the ATrack AX7 provides a simple, standardized server endpoint so multiple devices can be configured consistently for fleet visibility and operational oversight. The shared Plaspy server settings reduce complexity across deployments and let you focus on device placement, APN setup, and event policies.

Learn more about Plaspy and how it handles device ingestion and fleet management at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup information and command reference on the ATrack site https://www.atrack.com.tw/.
