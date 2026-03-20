---
slug: /sentar/d33_2g/configuration
id: d33_2g-configuration
sidebar_label: Configuration
title: Sentar - D33-2G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Sentar D33 2G smartwatch showing server settings and SMS commands for Plaspy compatibility
keywords:
  - Sentar D33-2G configuration
  - Sentar D33-2G setup
  - Sentar D33-2G server configuration
  - Plaspy tracker setup
  - Plaspy server configuration
  - Sentar GPS tracker configuration
  - Children's GPS smartwatch setup
  - D33-2G SMS configuration
  - GPS tracker Plaspy compatibility
  - tracker APN configuration
---

# Sentar - D33-2G Configuration

This page covers the public configuration context for using the Sentar D33-2G smartwatch with Plaspy. It collects the practical server settings, SMS commands, and workflow guidance publicly available for preparing the D33-2G to report location and events into the Plaspy platform. The content here focuses on what is required to make the tracker communicate with Plaspy and how to validate connectivity after configuration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools; the D33-2G commonly uses SMS based configuration and GPRS server settings, so review the manufacturer documentation and the SMS command examples below as part of a practical setup process.

## Configuration Overview

This configuration prepares a D33-2G for reliable reporting to Plaspy by setting the correct server endpoint, transport, APN and operational parameters. With the public SMS commands and server settings shown below, you can configure the device to send periodic reports and alerts to the Plaspy server.

- Set the device to report to the Plaspy server endpoint so location and alerts are visible in Plaspy.
- Configure the APN and GPRS settings so the device has mobile data connectivity.
- Choose the transport protocol and port so the tracker can establish a session with Plaspy.
- Validate configuration and test that the device is actively reporting to Plaspy after setup.
- Use the device verification commands to check current settings from the tracker.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when a device connects

All Plaspy supported devices use the same port and Plaspy will identify the tracker protocol automatically once the device is sending data to the configured endpoint.

## Typical Requirements Before Setup

- A charged D33-2G device that is powered on and accessible for configuration.
- A compatible 2G SIM card with mobile data activated and the correct operator APN.
- Access to SMS messaging from a phone number authorized to send configuration SMS to the device.
- The manufacturer configuration method or software documentation for the D33-2G.
- Knowledge of the device default password if required for SMS commands; the public defaults below use 123456.
- Confirmation of network coverage for 2G and GPRS connectivity at the installation location.

## How This Tracker Connects to Plaspy

The D33-2G is configured to report location and status updates to the shared Plaspy server endpoint and port so the device becomes visible in the Plaspy platform for real time monitoring and historical playback.

- The tracker sends periodic position updates to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be configured using UDP or TCP depending on device options and operator network.
- Plaspy detects the tracker protocol automatically and processes incoming messages for live tracking and events.
- Alerts such as SOS presses and status notifications are sent to the same Plaspy server endpoint for immediate visibility.
- Validation and monitoring can be performed after configuration to confirm device reporting and event delivery.

## Common Configuration Workflow

1. Access the official Sentar configuration method or manufacturer documentation for the D33-2G to confirm SMS syntax and any firmware notes.
2. Ensure the device has an active 2G SIM and that you know the correct APN details for the mobile operator.
3. Enter the Plaspy server as d.plaspy.com or 54.85.159.138 in the device configuration.
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device, typically by sending SMS commands or using the manufacturer tool.
6. Restart the device if required by the device workflow or indicated in the Sentar documentation.
7. Validate that the D33-2G reports to Plaspy by checking device connectivity and using the device verification command.

## Example Configuration Commands

The D33-2G supports configuration by SMS messages. The following example commands are the public SMS commands provided for the D33-2G. These commands preserve the public syntax as supplied by the manufacturer. The default device password shown here is 123456. If your device or firmware requires slight syntax differences, follow the exact syntax required by your firmware and the manufacturer documentation.

1. Optional factory reset (use only if you need to restore defaults)
```
pw,123456,factory#
```

2. Set the time zone to UTC 0
```
pw,123456,lz,0,0#
```

3. Check the SIM MCC and MNC or IMSI information
```
pw,123456,imsi#
```

4. Set the operator APN
- {{apn}} is the APN string for the mobile operator
- {{apnu}} is the APN username if required
- {{apnp}} is the APN password if required
- xxxyy represents MCC and MNC concatenated as indicated by the device
```
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```

5. Set GPRS server to Plaspy using the public IP and port
- The raw public command text available shows the server as 54.85.159.138 and port 8888
```
pw,123456.ip,54.85.159.138,8888#
```
Note: Verify the exact comma and parameter separators required by your device firmware. Manufacturer syntax sometimes requires commas between each parameter such as pw,123456,ip,54.85.159.138,8888#

6. Set the upload interval to 300 seconds
```
pw123456,upload,300#
```
Note: Some firmware variants expect a comma after the password as in pw,123456,upload,300#; consult Sentar documentation or test carefully.

7. Check current device settings
```
pw,123456,ts#
```

These commands are presented in the original public form. Keep placeholders such as {{apn}}, {{apnu}}, and {{apnp}} and replace them with your operator values when sending SMS to the device.

## Configuration Notes

- SMS syntax and required separators may vary by firmware version; always confirm the exact command format with Sentar documentation before sending configuration SMS.
- The D33-2G commonly uses SMS to apply settings and GPRS for data reporting; ensure your SIM and operator support the required 2G data services.
- Choose UDP or TCP based on your operator network reliability and device options; Plaspy accepts either transport on port 8888 and will handle protocol detection server side.
- APN placeholders must be replaced with your operator values; some networks require username and password fields while others accept only the APN string.
- Use the verification command to confirm current settings and avoid excessive SMS retries while troubleshooting.

## Why Use Plaspy with This Configuration

Configuring the Sentar D33-2G to report into Plaspy gives caregivers and administrators centralized visibility of location, SOS alerts, and activity for the device. Using the shared Plaspy server settings simplifies integration across multiple devices and lets Plaspy automatically detect and parse tracker protocol messages for real time monitoring and historical playback.

To learn more about Plaspy and supported device integration options visit https://www.plaspy.com. For the latest manufacturer specific commands, firmware notes, and device behavior verify current details on the Sentar website http://www.sentarsmart.com/ as manufacturer specifications and setup methods can change over time.
