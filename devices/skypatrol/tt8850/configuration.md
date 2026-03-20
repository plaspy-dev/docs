---
slug: /skypatrol/tt8850/configuration
id: tt8850-configuration
sidebar_label: Configuration
title: SkyPatrol - TT8850 Configuration
sidebar_class_name: menu_item_tracker
description: Setup and server settings for SkyPatrol TT8850 to connect with Plaspy platform
keywords:
  - SkyPatrol TT8850 configuration
  - SkyPatrol TT8850 setup
  - SkyPatrol TT8850 server configuration
  - TT8850 Plaspy setup
  - TT8850 GPS tracker configuration
  - Plaspy tracker integration
  - GPS tracker server settings
  - tracker APN and server setup
  - covert GPS tracker setup
  - personnel tracking configuration
---

# SkyPatrol - TT8850 Configuration

This page documents the public configuration context for using the SkyPatrol TT8850 with the Plaspy platform. It focuses on the practical server settings and example setup commands that are commonly used to get the TT8850 reporting to Plaspy. Use this guide alongside the TT8850 product documentation and the manufacturer's configuration methods.

Plaspy uses a shared server endpoint and port across supported devices and automatically detects the tracker protocol. Exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and vendor tools, so confirm any model specific differences with SkyPatrol documentation when needed.

## Configuration Overview

The goal of configuration is to prepare the TT8850 so it can communicate reliably with Plaspy, report position updates, and send event alerts such as SOS. For the TT8850 this typically involves setting the mobile operator APN, pointing the device to the Plaspy server, choosing the transport type, and adjusting reporting intervals and power modes.

- Configure the operator APN so the device can access GPRS data or accept SMS configuration
- Set the GPRS server to Plaspy and the required port so the tracker opens a session with the platform
- Choose transport mode UDP or TCP depending on device options and network policy
- Adjust update interval and power mode to balance battery life and reporting frequency
- Enable SOS and other event reporting so alerts are delivered to Plaspy
- Validate the device is visible in Plaspy after applying settings

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the TT8850 may be configured to use either transport
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged TT8850 with sufficient battery for testing and configuration
- A working SIM card installed with operator APN that supports data or SMS as required
- Access to the TT8850 manufacturer configuration method such as SMS commands or vendor software
- The device password or SMS configuration password used by SkyPatrol for your unit (example default shown below)
- A phone capable of sending SMS to the device if using SMS based configuration
- Access to the Plaspy platform to verify the device after configuration

## How This Tracker Connects to Plaspy

The TT8850 is configured to report to the Plaspy shared server endpoint and port so location and event data are received by the platform. Typically this involves programming the device with APN and server parameters, enabling reporting intervals, and activating event reporting features like SOS.

- The tracker uses configured GPRS settings to initiate a TCP or UDP session to d.plaspy.com on port 8888
- Plaspy accepts the incoming connection and automatically identifies the tracker protocol
- Location updates are sent at the configured reporting interval so the device is visible in the platform
- SOS and other event messages are sent to the same Plaspy endpoint for immediate routing and notification
- Because Plaspy uses a common port for devices, the TT8850 uses port 8888 like other supported trackers

## Common Configuration Workflow

1. Access the official SkyPatrol configuration method for the TT8850 such as SMS setup or the vendor tool documented by SkyPatrol
2. Enter the Plaspy server address using either d.plaspy.com or the IP 54.85.159.138
3. Set the server port to 8888 and choose UDP or TCP if the device requires selecting a transport
4. Configure the operator APN and any APN user name or password placeholders required by your carrier
5. Apply or save the configuration and restart the device if required by the manufacturer
6. Validate that the TT8850 connects and reports to Plaspy and that events like SOS are received in the platform
7. Adjust reporting interval or power settings as needed to match operational and battery requirements

## Example Configuration Commands

The TT8850 can be configured by sending SMS commands to the device. The following public example commands show a common sequence used to set APN, server, update interval, SOS, and power mode. The sample setup uses the device SMS password SM8570 as shown in SkyPatrol public instructions. Preserve placeholders when you replace them with your operator values.

- Note on placeholders
  - [apn] is the mobile operator APN
  - [apnu] is the APN user name if required
  - [apnp] is the APN password if required

1. Set the operator APN
```text
AT+GTBSI=SM8570,[apn],[apnu],[apnp],,,,,0002$
```

2. Set the GPRS server to Plaspy (domain and IP are both included in this example)
```text
AT+GTSRI=SM8570,4,,,d.plaspy.com,8888,54.85.159.138,8888,,0,1,,,,,0003$
```

3. Set the update reporting interval
```text
AT+GTFRI=SM8570,1,1,,,0000,2359,300,300,,,1F,,,,,,,,,0007$
```

4. Enable the SOS button reporting
```text
AT+GTFKS=SM8570,1,,1,1,1,,,ffff$
```

5. Disable or adjust power saving mode
```text
AT+GTNMD=SM8570,8,3,2,3,1800,1800,,,,,,,,0005$
```

These commands are public examples and are typically sent as SMS to the device. The order shown is practical for a basic setup sequence. Replace the placeholders with your operator values and confirm the device password if your unit uses a different default.

## Configuration Notes

- The provided SMS commands are example public commands. Exact syntax and available parameters can change with firmware updates or regional hardware variants
- The TT8850 supports SMS based configuration in this example, so ensure the device accepts SMS and that the correct device password is used
- Choose UDP or TCP according to your network environment and any carrier restrictions; Plaspy accepts either transport on port 8888
- All devices in Plaspy use the same port and the platform will automatically detect the tracker protocol so you do not need a separate port per device
- After applying changes test connectivity and verify the device appears in Plaspy before deploying in production

## Why Use Plaspy with This Configuration

Using Plaspy with the SkyPatrol TT8850 provides a straightforward way to centralize live location and event data from a compact tracker. The shared Plaspy server settings and automatic protocol detection simplify integration, letting you focus on APN and device-level options like reporting interval and SOS behavior.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the most current device specific setup instructions, firmware notes, and manufacturer details verify information on the SkyPatrol website https://www.skypatrol.com/.
