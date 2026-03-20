---
slug: /eelink/k6/configuration
id: k6-configuration
sidebar_label: Configuration
title: EElink - K6 Configuration
sidebar_class_name: menu_item_tracker
description: Public instructions to configure EElink K6 GPS tracker for use with Plaspy using shared server settings and SMS commands
keywords:
  - EElink K6 configuration
  - EElink K6 setup
  - EElink K6 server configuration
  - Plaspy EElink K6
  - GPS tracker configuration
  - vehicle tracking setup
  - K6 tracker SMS commands
  - GPRS tracker setup
  - fleet tracking configuration
  - K6 protocol settings
---

# EElink - K6 Configuration

This page describes the public configuration context for using the EElink K6 GPS tracker with the Plaspy platform. It brings together the shared Plaspy server settings and the K6 SMS based configuration commands that are commonly used to point the device to Plaspy for real time tracking and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps for the K6 can vary by firmware version, hardware revision, installation type, and vendor tools. The examples below use the K6 SMS command flow that is publicly documented for initial setup and verification.

## Configuration Overview

The goal of configuration is to prepare the K6 to communicate reliably with Plaspy so the device appears and reports correctly in the platform. For the K6 this typically means using SMS commands or the manufacturer tool to set network APN, server endpoint, transport and reporting interval.

- Configure the device APN so it can use GPRS for data uploads.
- Point the device to the Plaspy server endpoint and the shared Plaspy port.
- Choose the transport mode if the device requires UDP or TCP selection.
- Set a periodic location upload interval to match your tracking requirements.
- Verify settings and confirm the device is visible in Plaspy after it connects.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport can be configured as UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged and powered K6 tracker with access to SMS configuration or the official configuration tool
- An active SIM card with GPRS data enabled and the correct operator APN
- A phone or service capable of sending SMS commands to the device or access to the manufacturer configuration utility
- Basic knowledge of the device IMEI and how to verify device responses to SMS
- Access to up to date EElink documentation or vendor support for firmware specific details

## How This Tracker Connects to Plaspy

The EElink K6 uploads position and device events to Plaspy using GPRS. During configuration you will set the K6 to report to the shared Plaspy server endpoint and port so the platform can receive location updates, alarms, and status messages.

- The tracker uses GPRS to open a data connection and send periodic reports
- Server address is set to d.plaspy.com or the Plaspy server IP to ensure delivery
- Communication occurs on port 8888 which is the shared port used by Plaspy for all devices
- Plaspy automatically detects the tracker protocol so no manual protocol selection is required on the platform side
- Once connected the device becomes visible in Plaspy for real time monitoring and history playback

## Common Configuration Workflow

1. Access the official EElink configuration method for the K6 such as SMS commands or the manufacturer software.
2. Configure the device APN to match your SIM operator using the APN command or the tool.
3. Enter the Plaspy server address by using d.plaspy.com or 54.85.159.138 as the SERVER value.
4. Set the server port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device and optionally perform a restart if required.
6. Validate that the device reports to Plaspy by checking the device status in the platform and using the device verification commands.
7. If needed, adjust the upload interval or alarm settings to match operational needs.

## Example Configuration Commands

The K6 supports SMS configuration. The following public SMS commands are commonly used to apply the configuration shown above. Send these commands as SMS messages to the tracker in the order indicated when performing an initial setup.

- Optional initial factory reset when starting from an unknown state
```text
FACTORY#
```

- Set the time zone to UTC 0 as an example
```text
GMT,E,0#
```

- Set the APN for your mobile operator
```text
APN,[apn]#
```
If your operator requires APN user name or password, include the optional placeholders as shown
```text
APN,[apn],[apnu],[apnp]#
```
Note about placeholders
- [apn] is the operator APN value required for GPRS
- [apnu] is the APN user name if required by the mobile operator
- [apnp] is the APN password if required by the mobile operator

- Set the GPRS server to Plaspy by domain using UDP or TCP on port 8888
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server to the Plaspy server IP directly
```text
SERVER,0,54.85.159.138,8888#
```

- Set location update interval to 60 seconds
```text
TIMER,60#
```

- Check current device parameters to verify changes
```text
PARAM#
```

## Configuration Notes

- SMS based configuration is a commonly supported method for the K6 but manufacturer tools or a configuration portal may also be used depending on the firmware.
- Behavior and available commands can vary by firmware version and hardware revision; always verify commands against the EElink documentation for your device.
- Choose UDP or TCP according to installer preference when the device requires an explicit transport selection. Plaspy accepts either on port 8888.
- Plaspy uses the same port for all supported devices and will automatically detect the device protocol when the tracker connects.
- Keep a record of any changes and test connectivity after each step to ensure the device is reporting as expected.

## Why Use Plaspy with This Configuration

Using the EElink K6 with Plaspy provides a straightforward path to get asset and vehicle location data into a single fleet management platform. Configuring the K6 to point to d.plaspy.com or the Plaspy server IP on port 8888 lets the device report location updates and events so teams can monitor movement, react to alarms, and review history in one place.

To learn more about Plaspy visit https://www.plaspy.com and for the latest device specific instructions verify setup methods and firmware details on the EElink website https://www.eelink.com.cn/ . Manufacturer specifications and configuration steps can change over time so always confirm current instructions with the official EElink documentation.
