---
slug: /topfly/pioneer_x100/configuration
id: pioneer_x100-configuration
sidebar_label: Configuration
title: TopFly - Pioneer X100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopFly Pioneer X100 showing how to point the device to Plaspy with example SMS commands and server settings
keywords:
  - TopFly Pioneer X100 configuration
  - Pioneer X100 setup
  - TopFly tracker configuration
  - Pioneer X100 Plaspy setup
  - GPS tracker configuration
  - vehicle tracking setup
  - tracker server configuration
  - Pioneer X100 SMS setup
  - Plaspy server settings
  - fleet tracking integration
---

# TopFly - Pioneer X100 Configuration

This page covers the public configuration context for using the TopFly Pioneer X100 with Plaspy. It shows the shared Plaspy server settings, explains the practical steps you may use to prepare the tracker, and includes example SMS commands that are commonly used for this model according to available public documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device reports to the platform. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so treat the commands and workflow here as a practical, public reference rather than an exhaustive manufacturer manual.

## Configuration Overview

The objective of configuring a Pioneer X100 for Plaspy is to ensure the tracker can reach the Plaspy server and reliably report location and event data. Configuration sets the APN and GPRS server, selects transport, and enables periodic reporting so the device becomes visible and manageable in Plaspy.

- Set the device APN and any required SIM credentials so the tracker has an active data connection.
- Configure the device to report to the Plaspy server endpoint so platform ingestion is possible.
- Choose the transport type if required by the device firmware (UDP or TCP) to match network and server expectations.
- Configure reporting intervals or timers so location updates meet operational needs.
- Validate connectivity and that the device appears in Plaspy after configuration.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Protocol handling: Plaspy automatically detects the tracker protocol when the device connects and all devices use the same port for Plaspy ingestion

## Typical Requirements Before Setup

- Constant power to the Pioneer X100 during configuration and testing.
- Active SIM card with a data plan and the correct APN details for the cellular operator.
- Access to the tracker using the official manufacturer configuration method that you have available (SMS, configuration tool, or installer software).
- Knowledge of the device default password if SMS configuration is used; the public example below uses 0000 as the default password.
- A Plaspy account or access to your Plaspy platform instance to confirm device visibility after configuration.
- A test procedure to validate reporting and alarm behavior after configuration.

## How This Tracker Connects to Plaspy

When configured, the Pioneer X100 sends location and event data to the shared Plaspy ingestion endpoint and port so the platform can display assets and events. The tracker will use the configured APN for GPRS data and then open a connection to the Plaspy server.

- The tracker is set to report to d.plaspy.com or the equivalent IP 54.85.159.138 at port 8888.
- You can choose UDP or TCP as the transport when the firmware requires a selection.
- Plaspy automatically detects the protocol used by the tracker when data arrives on port 8888.
- After configuration the device transmits periodic updates according to the configured timer settings so the asset is visible in Plaspy.
- Events and alarms reported by the tracker will be forwarded into Plaspy for monitoring and analysis.

## Common Configuration Workflow

1. Access the official TopFly manufacturer configuration method or software appropriate for your device and firmware, such as SMS commands or the vendor configuration tool.
2. Enter the Plaspy server hostname d.plaspy.com or the server IP 54.85.159.138 in the device server or IP setting.
3. Set the server port to 8888 which Plaspy uses for all devices.
4. Choose UDP or TCP if the device requires transport selection.
5. Configure the APN and any SIM credentials so the tracker can establish a data connection.
6. Apply or save the configuration in the device and restart the tracker if the firmware requires a reboot for settings to take effect.
7. Validate that the tracker reports to Plaspy and appears in your Plaspy account or dashboard.

## Example Configuration Commands

To set the Pioneer X100 by SMS, send the following commands in order. The public example below uses the device default password 0000. Replace placeholders and values as needed for your SIM and configuration.

- Set the time zone to UTC 0
```
GMT,0000,0#
```

- Set the operator APN and optional APN username and password
```
APN,0000,[apn],[apnu],[apnp]#
```
Note: [apn] is the access point name for your mobile operator. [apnu] and [apnp] are optional APN username and APN password placeholders; leave them blank if not required by your operator.

- Set the GPRS server to the Plaspy IP and port
```
IP,0000,54.85.159.138 8888#
```
You may alternatively point the device to d.plaspy.com if the device accepts a hostname.

- Set the update interval to 60 seconds
```
TIMER,0000,60:60:0:0#
```

These SMS commands preserve the order shown because APN and server settings should be in place before validating reporting to Plaspy.

## Configuration Notes

- Firmware differences can change the exact command syntax and available options; consult the device firmware release notes when possible.
- This model publicly supports SMS configuration as shown, but TopFly installer tools or a configuration utility might provide additional options or a GUI.
- Choosing TCP versus UDP can depend on network conditions and operator behavior; both transports are supported for connecting to Plaspy at port 8888.
- Keep APN placeholders [apn], [apnu], and [apnp] intact when preparing commands and replace them with your operator values.
- The example uses the public default password 0000 in commands where required; consider securing the device following manufacturer guidance after initial setup.

## Why Use Plaspy with This Configuration

Configuring the TopFly Pioneer X100 to report to Plaspy provides centralized visibility for fleet and asset monitoring, letting organizations receive location updates, alarms, and event data in a single platform. Using Plaspy's shared ingestion endpoint simplifies device onboarding because the platform automatically detects the tracker protocol and uses the same port for all supported devices.

To learn more about Plaspy and how it handles device ingestion and fleet management, visit https://www.plaspy.com. Manufacturer configuration methods, firmware behavior, and setup details can change over time, so verify the latest device specific documentation at https://www.topflytech.com/ before performing mass deployments or critical updates.
