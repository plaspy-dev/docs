---
slug: /eelink/gpt15/configuration
id: gpt15-configuration
sidebar_label: Configuration
title: EElink - GPT15 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for EElink GPT15 tracker configuration with Plaspy server settings and example SMS commands
keywords:
  - EElink GPT15 configuration
  - EElink GPT15 setup
  - GPT15 Plaspy configuration
  - GPT15 server configuration
  - GPS tracker configuration
  - Plaspy tracker setup
  - GPT15 SMS setup
  - asset tracker configuration
  - luggage tracker setup
  - GPS platform integration
---

# EElink - GPT15 Configuration

This page covers the public configuration context needed to connect the EElink GPT15 tracker to the Plaspy platform. It collects the server endpoints and example SMS commands publicly available for the GPT15 so you can prepare the device to report location and events to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device reports to the platform. Manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the commands and workflow below as practical public guidance rather than a replacement for the latest EElink documentation or vendor instructions.

## Configuration Overview

This configuration prepares the GPT15 to send location and sensor data to Plaspy using Plaspy's shared server endpoint and port. The steps below focus on establishing network connectivity, pointing the device to Plaspy, and validating that the device is visible in the Plaspy platform.

- Point the GPT15 to the Plaspy server endpoint so location and alerts are sent to Plaspy for processing.
- Configure the device APN and GPRS server settings so the tracker can access mobile data and GPRS transport.
- Choose UDP or TCP transport and set the shared Plaspy port so the device can communicate with the platform.
- Validate reporting and telemetry visibility in Plaspy to confirm location, tamper, and battery events are arriving.
- Use remote configuration methods such as SMS or the device app to apply settings when in the field.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol once the device connects

All devices in Plaspy use the same port, and the platform will detect the tracker protocol automatically after the device begins reporting.

## Typical Requirements Before Setup

- A charged GPT15 device with the battery installed and the unit powered on.
- A working SIM card with an active data or GPRS plan if using mobile data, and SMS capability if applying settings by SMS.
- Access to the EElink configuration method you prefer, for example the manufacturer app or SMS commands.
- Network coverage in the device location that supports the device cellular bands.
- The device unique identifier commonly required by platforms such as the IMEI or device serial for device registration on Plaspy.
- A phone able to send SMS commands if you will use SMS based configuration.

## How This Tracker Connects to Plaspy

The GPT15 is configured to report location and event data to the shared Plaspy server endpoint and port so the platform can ingest telemetry and present it on maps and alerts. Once pointed at Plaspy and granted network access, the device transmits location and sensor events to the platform for visibility and notifications.

- The device sends location updates and status messages to d.plaspy.com or to 54.85.159.138 on port 8888.
- Transport can be configured as UDP or TCP depending on device options and network conditions.
- Plaspy receives the incoming data stream and automatically detects the device protocol for proper parsing.
- Events such as tamper alerts, geofence triggers, and low battery warnings are forwarded to Plaspy for real time notification.
- Visibility in Plaspy enables history reporting, live tracking, and alert configuration for the GPT15.

## Common Configuration Workflow

1. Access the official EElink configuration method you will use, such as the EElink mobile app or SMS commands documented by the vendor.
2. Configure the device APN settings for the mobile operator if required by sending the APN configuration or using the app.
3. Enter the Plaspy server as either d.plaspy.com or the IP 54.85.159.138 in the device server settings.
4. Set the port to 8888 and choose UDP or TCP transport if the device requires an explicit transport selection.
5. Apply or save the configuration and, if applicable, send any final save command or confirm settings in the app.
6. Restart the device if required by the device instructions or if changes do not appear to take effect immediately.
7. Validate that the device reports to Plaspy by checking the device list and recent telemetry in the Plaspy platform.

If you prefer SMS-based setup, use the SMS commands in the Example Configuration Commands section below to perform each step.

## Example Configuration Commands

The GPT15 supports SMS based configuration. The following public SMS commands are presented in the order that is commonly used. Send each command as an SMS to the device phone number. Label the reset command optional and use it only when you need to return the device to factory defaults.

- Optional initial reset to factory settings
```
FACTORY#
```

- Set the time zone to UTC 0
```
GMT,E,0#
```

- Set the operator APN
```
APN,[apn][ ,[apnu],[apnp] ]#
```
Notes on the APN command
- [apn] is the APN name for the mobile operator.
- [apnu] is the APN username if required by the operator. Leave blank if not required.
- [apnp] is the APN password if required by the operator. Leave blank if not required.
- Keep the comma separated format. Include the optional fields only if your operator requires them.

- Set the GPRS server using the Plaspy domain (preferred)
```
SERVER,1,d.plaspy.com,8888#
```

- Alternatively set the GPRS server using the Plaspy IP
```
SERVER,0,54.85.159.138,8888#
```

- Set an update interval of 60 seconds
```
TIMER,60#
```

- Verify current parameters
```
PARAM#
```

Send each command as its own SMS message unless you are using a batch method supported by your configuration tool. Keep placeholders such as [apn] as shown and replace them with your operator details when sending SMS.

## Configuration Notes

- SMS based configuration is supported by the GPT15 as a public method and is useful when app access is not available during field deployment.
- Firmware revisions and hardware versions can change supported commands or parameter names. Check the EElink documentation or vendor notes for firmware specific command changes.
- Choose UDP or TCP transport based on local network behavior. Plaspy accepts both transports on port 8888 and will detect the protocol automatically.
- All devices in Plaspy use the same port, so use port 8888 for direct device to Plaspy server connections.
- Use the PARAM# command or the device app to verify that APN, server, and timer values are correctly applied after configuration.

## Why Use Plaspy with This Configuration

Using the GPT15 with Plaspy provides a practical way to monitor luggage and small assets in real time. Pointing the tracker to Plaspy's shared server endpoint and port enables fast ingestion of location, tamper, and battery events so that alerts and history reporting are available centrally for operators and owners.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so please verify the latest setup information on the official EElink site https://www.eelink.com.cn/ before deploying devices.
