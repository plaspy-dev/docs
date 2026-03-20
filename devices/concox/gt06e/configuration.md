---
slug: /concox/gt06e/configuration
id: gt06e-configuration
sidebar_label: Configuration
title: Concox - GT06E Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Concox GT06E integration with Plaspy including required server settings and example SMS commands
keywords:
  - Concox GT06E configuration
  - Concox GT06E setup
  - Concox GT06E server configuration
  - GT06E Plaspy setup
  - Plaspy tracker configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet management tracker
  - GT06E SMS commands
  - GPRS tracker setup
---

# Concox - GT06E Configuration

This page describes the public configuration context for using the Concox GT06E tracker with Plaspy. It collects the practical, nonproprietary information you need to configure the device to report to Plaspy servers, including the server host, transport options, and example SMS commands that are commonly used with this model.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device is pointed at the platform. Manufacturer-side setup steps can vary by firmware version, hardware revision, installer tools, or vendor customization. The examples on this page use publicly available SMS commands for the GT06E where provided and explain required placeholders such as APN values.

## Configuration Overview

This configuration process prepares a GT06E tracker to communicate with Plaspy and appear in the platform for real time visibility and operational monitoring.

- Point the GT06E to Plaspy server settings so it sends location and event data to the platform.
- Configure GPRS/APN and enable GPRS so the device can use mobile data to reach Plaspy.
- Choose UDP or TCP transport and set the port used by Plaspy to ensure connectivity.
- Validate the device reports successfully to Plaspy and adjust reporting intervals as needed.
- Use manufacturer-supported methods such as SMS commands or vendor tools to apply the configuration.

## Plaspy Server Settings

Set the GT06E to report to the Plaspy server using the following public settings:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol once the device connects

Note that Plaspy uses the same port for all supported devices and can accept connections by domain or IP.

## Typical Requirements Before Setup

- A powered GT06E unit with access to its SMS or configuration interface.
- A valid SIM card provisioned for mobile data and SMS if using SMS configuration or GPRS reporting.
- The correct APN information for your mobile operator (APN, username, password) to enable GPRS.
- Access to the official Concox configuration method or vendor tool, or the ability to send SMS commands to the device.
- Basic knowledge of the device IMEI and installer procedures for applying commands.
- An understanding that firmware versions or regional variants may alter command sets or behavior.

## How This Tracker Connects to Plaspy

When configured correctly, the GT06E sends periodic location and event information to Plaspy so the platform can display positions and alerts in near real time.

- The device is configured with Plaspy server domain or IP and the shared port so data is routed to Plaspy.
- Transport is set to UDP or TCP depending on device support and installer preference.
- The tracker opens a GPRS data session using the operator APN to transmit telemetry.
- Plaspy automatically detects the tracker protocol when it receives the first connection, simplifying server-side setup.
- Once reporting is active, Plaspy receives position updates, timer-based reports, and device events for monitoring.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as vendor software or SMS command interface.
2. Enter the Plaspy server address as either d.plaspy.com or 54.85.159.138.
3. Set the port to 8888.
4. Choose UDP or TCP if the device requires a transport selection.
5. Configure the operator APN and enable GPRS so the device can use mobile data.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy and appears in the platform.

If you use SMS commands for configuration, follow the device-specific order and syntax provided by Concox or your vendor; an example command sequence is included below.

## Example Configuration Commands

The GT06E can be configured by sending SMS commands to the device. The following public commands are provided in manufacturer documentation and should be sent in the order shown for initial setup. Label the reset command as optional or only for initial reconfiguration when needed.

- Optional factory reset (use only if you need to restore defaults)
```
FACTORY#
```

- Set the time zone to UTC+0
```
GMT,E,0#
```

- Set the operator APN
Note: [apn] is the mobile operator APN. Optional placeholders [apnu] and [apnp] represent APN username and APN password if required by the operator.
```
APN,[apn]#
```
Or if username and password are required:
```
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to Plaspy by domain (preferred for DNS)
```
SERVER,1,d.plaspy.com,8888,0#
```

- Alternatively set the GPRS server to Plaspy by IP
```
SERVER,0,54.85.159.138,8888,0#
```

- Set the update/report interval to 60 seconds (two common variants)
```
TIMER,60#
```
or
```
TIMER,60,60#
```

- Enable GPRS mode
```
GPRSON,1#
```

- Check current GPRS parameter settings (verification command)
```
GPRSSET#
```

Send these SMS commands to the device phone number in the order appropriate for your deployment. Replace placeholders with your carrier APN details where required.

## Configuration Notes

- SMS and GPRS configuration shown here are public commands commonly associated with the GT06E; actual syntax can vary by firmware or vendor customizations.
- Plaspy accepts connections via domain or IP and uses port 8888 for all devices; you can set either d.plaspy.com or the IP address in the SERVER command.
- Choose UDP or TCP based on your network and device firmware capabilities; some installers prefer UDP for simplicity while others prefer TCP where reliable delivery is required.
- Keep APN placeholders [apn], [apnu], and [apnp] and replace them with operator values. If your SIM does not require username or password, only the APN is required.
- Always confirm command support and exact syntax with Concox documentation or your supplier before applying changes in production.

## Why Use Plaspy with This Configuration

Using the Concox GT06E with Plaspy provides a straightforward way to route device telemetry and event data to a single platform for fleet visibility and operational oversight. Configuring the tracker to use Plaspy server settings enables centralized monitoring, alerting, and historical tracking for vehicles and assets.

Learn more about Plaspy and how it can be used with supported trackers at https://www.plaspy.com. For the most current device specific commands, firmware notes, and manufacturer setup guidance verify details on the Concox official site https://www.iconcox.com/ as manufacturer specifications and setup methods can change over time.
