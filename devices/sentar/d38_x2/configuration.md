---
slug: /sentar/d38_x2/configuration
id: d38_x2-configuration
sidebar_label: Configuration
title: Sentar - D38-X2 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Sentar D38-X2 smartwatch tracker to Plaspy with practical server and SMS setup steps
keywords:
  - Sentar D38-X2 configuration
  - Sentar D38-X2 setup
  - D38-X2 Plaspy
  - Sentar GPS tracker setup
  - kids GPS tracker configuration
  - Plaspy server configuration
  - D38-X2 SMS commands
  - Sentar APN settings
  - GPS watch configuration
  - child tracker Plaspy
---

# Sentar - D38-X2 Configuration

This page covers the public configuration context for using the Sentar D38-X2 smartwatch tracker with Plaspy. It summarizes the practical server settings, common SMS commands found in public device documentation, and the general steps required to point the D38-X2 at Plaspy so the device reports location and status to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The D38-X2 supports SMS-based configuration in public documentation and this page uses those publicly available commands as an example of how to apply Plaspy server settings.

## Configuration Overview

The goal of configuring the D38-X2 for Plaspy is to ensure the tracker can reach the Plaspy server endpoint and regularly upload location and device status so caregivers can monitor the device from the Plaspy dashboard. Configuration typically involves setting the mobile network APN, specifying the Plaspy server, selecting the transport method if required, and verifying that the device is reporting correctly.

- Configure the device APN so it has mobile data access for GPRS uploads.
- Set the device GPRS server or server domain to point at Plaspy so location data is delivered.
- Choose UDP or TCP transport if the tracker requires a transport selection.
- Set an upload interval so the device sends regular location updates to Plaspy.
- Verify settings and confirm the tracker is visible and reporting in Plaspy.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP are both supported by the device and Plaspy accepts either on the configured port  
- Plaspy behavior: Plaspy automatically detects the tracker protocol; all devices in Plaspy use the same port for server connections

These values are the public Plaspy settings to use when configuring the D38-X2 to report to the Plaspy platform.

## Typical Requirements Before Setup

- A charged and powered D38-X2 device ready for configuration.  
- An active SIM card with mobile data enabled and SMS capability if using SMS commands.  
- APN settings for the mobile operator (MCC and MNC may be required).  
- Access to the device SMS command interface or the official Sentar configuration software or tool.  
- Knowledge of the device password (public documentation shows the default password is 123456).  
- Access to the manufacturer's documentation or vendor support for firmware-specific steps.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the D38-X2 sends location fixes and device status updates to the shared Plaspy server endpoint and port. The device uses the mobile data channel (GPRS) to open a connection to Plaspy and uploads telemetry according to the configured upload interval and transport.

- The tracker is set to report to d.plaspy.com or directly to 54.85.159.138 on port 8888.  
- The device can use UDP or TCP to deliver data depending on device settings and network conditions.  
- Plaspy automatically detects the device protocol so the server side accepts the stream and decodes messages.  
- Regular upload intervals allow near real-time visibility of location and basic device status in Plaspy.  
- Caregivers and administrators can monitor connectivity and receive alerts through the Plaspy platform once reporting is validated.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the D38-X2 (SMS commands, vendor tool, or Sentar configuration app) as described in the device documentation.  
2. Use the device password (default publicly documented as 123456) to authenticate configuration commands.  
3. Enter the Plaspy server endpoint either as domain d.plaspy.com or as the IP address 54.85.159.138 in the device server settings.  
4. Set the port to 8888 in the device server configuration and choose UDP or TCP if the device requires an explicit transport selection.  
5. Configure the device APN and operator settings so the tracker has mobile data access (use the appropriate MCC and MNC where required).  
6. Apply or save the configuration and restart the device if the manufacturer instructions recommend a reboot.  
7. Validate reporting by checking device connectivity and verifying the tracker appears and updates in Plaspy.

If you use the SMS method shown in public Sentar documentation, apply the commands in the correct order and then confirm status with the verification command.

## Example Configuration Commands

The following commands are taken from publicly available Sentar D38-X2 configuration examples and are shown here in the order they appear in that material. Note that the publicly documented default password is 123456. Commands are sent as SMS to the tracker when SMS configuration is supported.

- Optional initial factory reset (use only if needed):
```text
pw,123456,factory#
```

- Set the time zone to UTC 0:
```text
pw,123456,lz,0,0#
```

- Check MCC and MNC (IMSI) to confirm operator codes:
```text
pw,123456,imsi#
```

- Set the operator APN where [apn] is the APN name, [apnu] is the APN user, [apnp] is the APN password, and xxxyy represents MCC and MNC concatenated:
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```
Explanation: keep the placeholders [apn], [apnu], and [apnp] and replace them with the operator values required by your SIM. The "xxxyy" placeholder represents MCC and MNC as required by the device.

- Set the GPRS server to the Plaspy IP and port (public example):
```text
pw,123456.ip,54.85.159.138,8888#
```

- Set the upload interval to 300 seconds:
```text
pw123456,upload,300#
```

- Check current settings (verification):
```text
pw,123456,ts#
```

Note: Preserve the command formatting and placeholders exactly as required by the device. Some SMS command examples in public documentation include punctuation variations; follow the Sentar documentation for the exact syntax required by your firmware.

## Configuration Notes

- SMS-based configuration is publicly documented for this model; use SMS commands only when recommended by the manufacturer and when you have the correct device password.  
- Firmware and hardware revisions can change command syntax and available options; confirm exact command formats with Sentar documentation.  
- Plaspy uses the same port for all supported devices and will auto-detect the tracker protocol, so specify port 8888 when setting the server.  
- Choose UDP or TCP according to device options and network reliability; TCP may provide delivery confirmation while UDP can reduce overhead depending on the device firmware.  
- Protect the device password and change default credentials if the manufacturer supports a secure change to prevent unauthorized reconfiguration.

## Why Use Plaspy with This Configuration

Configuring the Sentar D38-X2 to report to Plaspy gives caregivers centralized, real-time visibility of a child's location and device status through a single monitoring platform. Using the shared Plaspy server settings simplifies setup across devices and makes it straightforward to include the D38-X2 alongside other compatible trackers for consolidated oversight.

To learn more about Plaspy and how it integrates with devices like the D38-X2 visit https://www.plaspy.com. For the most current device specific configuration commands, firmware notes, and official instructions verify the manufacturer documentation at http://www.sentarsmart.com/ because manufacturer specifications and setup methods can change over time.
