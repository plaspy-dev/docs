---
slug: /tk_star/lk106/configuration
id: lk106-configuration
sidebar_label: Configuration
title: TK-Star - LK106 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TK Star LK106 and Plaspy server settings to get the tracker reporting to the Plaspy platform
keywords:
  - TK Star LK106 configuration
  - TK Star LK106 setup
  - LK106 server configuration
  - LK106 Plaspy setup
  - LK106 GPS tracker configuration
  - Plaspy tracker configuration
  - GPS tracker server settings
  - LK106 GPRS setup
  - TK Star tracker SMS commands
  - vehicle tracking configuration
---

# TK-Star - LK106 Configuration

This page covers the public configuration context for using the TK-Star LK106 portable GPS tracker with the Plaspy platform. It focuses on the practical server settings and the manufacturer supplied public commands that are commonly used to point LK106 devices to Plaspy so the devices can report location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol during connection. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. The example commands below are drawn from public LK106 configuration content and show a typical SMS based GPRS setup flow for reporting to Plaspy.

## Configuration Overview

The goal of this configuration process is to prepare the LK106 so it can reliably communicate with Plaspy and be visible in the platform. The steps shown here help you set the mobile data APN if needed, point the device to the Plaspy server, and enable periodic uploads so your device appears in the Plaspy dashboard.

- Configure the tracker to use the correct mobile operator APN and credentials if required.
- Point the tracker to the Plaspy server endpoint and use the shared Plaspy port for all devices.
- Set the upload interval so the tracker regularly sends position updates to Plaspy.
- Switch the tracker to GPRS mode so it uses mobile data to report to the server.
- Validate connectivity so the device appears and reports correctly in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Note: Plaspy uses the same port for all supported devices which simplifies device configuration across models.

## Typical Requirements Before Setup

- A powered and functional LK106 unit with battery or external power applied.
- A valid SIM card with active mobile data and GPRS enabled when required.
- Access to the LK106 manufacturer configuration method, in this case SMS based commands as shown in the example commands.
- The mobile operator APN details if the SIM requires a custom APN, username, or password.
- Ability to send SMS messages to the tracker from an authorized phone number if the device restricts SMS access.

## How This Tracker Connects to Plaspy

The LK106 is configured to send position and status data to the Plaspy server endpoint and port so Plaspy can display and manage tracker telemetry. Once the server and APN settings are correct, the device will regularly upload data using the selected transport protocol.

- The tracker reports location and device status to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Plaspy accepts connections over UDP or TCP and will automatically detect the LK106 protocol.
- The device is typically switched to GPRS mode so mobile data is used for periodic uploads.
- Regular upload intervals ensure visibility in Plaspy for real time monitoring and history trace.
- Alerts and event reporting become visible in Plaspy once the device is successfully connected.

## Common Configuration Workflow

1. Access the official TK-Star configuration method for the LK106, commonly SMS commands or the vendor tools documented by the manufacturer.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server setting.
3. Set the server port to 8888, which is the shared Plaspy port for all devices.
4. Choose UDP or TCP if the device requires a transport selection for GPRS uploads.
5. Apply or save the configuration changes on the device using the manufacturer method.
6. Restart the device if the firmware requires a reboot to apply network settings.
7. Validate that the device reports to Plaspy and appears in the platform with regular location updates.

## Example Configuration Commands

The LK106 can be configured using SMS commands. The public, commonly used commands and their order are shown below. The device default password shown here is 123456 and must be kept or replaced as applicable.

- Optional initial step to restore factory settings (only use if you need to reset the device):
```text
begin123456
```

- Set the operator APN (replace [apn] with your operator APN):
```text
apn123456 [apn]
```

- Set the APN username if required by your operator (replace [apnu] with the APN username):
```text
apnuser123456 [apnu]
```

- Set the APN password if required by your operator (replace [apnp] with the APN password):
```text
apnpasswd123456 [apnp]
```

- Set the GPRS server to Plaspy using the public server IP and port 8888
```text
adminip123456 54.85.159.138 8888
```

- Set the upload interval to 60 seconds so the device reports every minute
```text
upload123456 60
```

- Switch the tracker to GPRS mode so it uses mobile data for uploads
```text
gprs123456
```

Placeholders explanation:
- [apn] — the mobile operator APN string required for GPRS data.
- [apnu] — optional APN username if your carrier requires authentication.
- [apnp] — optional APN password if your carrier requires authentication.

Send these SMS commands from the authorized phone number or management number configured for the LK106. Keep the default password 123456 unless you have changed it for security; include the correct device password in every command when required.

## Configuration Notes

- SMS based setup is a common manufacturer method for the LK106; follow the order above when using SMS commands to avoid partial configuration.
- Firmware versions and hardware revisions can change command syntax or requirements. Verify commands against the LK106 manual for your device firmware.
- Choose UDP or TCP based on your network and device requirements; Plaspy supports both and will detect the protocol automatically when the device connects.
- The APN placeholders must be set correctly for the device to establish a GPRS session and reach the Plaspy server.
- Remember Plaspy uses one shared port for all devices which simplifies server configuration across multiple trackers.

## Why Use Plaspy with This Configuration

Using the LK106 configured to report to Plaspy gives organizations reliable location visibility and the ability to monitor devices in real time. Configuring the device to the shared Plaspy server and port ensures consistent behavior across different tracker models and simplifies fleet onboarding.

To learn more about Plaspy and supported device integration, visit https://www.plaspy.com. Device specific configuration commands, firmware behavior, and manufacturer guidance can change over time, so verify the latest details on the official manufacturer site https://www.tk-star.com/ before performing large scale deployments.
