---
slug: /xexun/u01/configuration
id: u01-configuration
sidebar_label: Configuration
title: Xexun - U01 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Xexun U01 for use with Plaspy including server settings SMS commands and practical setup steps
keywords:
  - xexun u01 configuration
  - xexun u01 setup
  - xexun u01 plaspy
  - plaspy tracker configuration
  - u01 server settings
  - indoor positioning watch configuration
  - u01 sms setup
  - tracker integration guide
  - u01 gprs configuration
  - device server configuration
---

# Xexun - U01 Configuration

This page documents the public configuration context for using the Xexun U01 with Plaspy. It explains the shared Plaspy server settings you will apply to the device, shows the commonly used SMS configuration commands supplied by the manufacturer, and describes practical steps to bring the U01 online in a Plaspy deployment.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The U01 supports SMS based setup in addition to the integration workflows described here, and this page focuses on the public, practical settings you need to connect the device to Plaspy.

## Configuration Overview

Configuring the U01 for Plaspy prepares the device to send positional and telemetry data to a central Plaspy endpoint and ensures the device is visible and manageable within the platform. The process typically uses the device manufacturer configuration method, which for the U01 includes SMS commands shown below.

- Provide Plaspy with the device data endpoint and port so the U01 can report location and telemetry.
- Configure APN and GPRS parameters so the device can reach Plaspy over cellular data.
- Validate transport and connectivity then confirm the device is reporting to Plaspy.
- Save settings and restart the device if required to start live reporting.
- Use SMS configuration when local or remote management tools are unavailable.

## Plaspy Server Settings

Set the device to report to the Plaspy server using the following public settings when configuring the U01:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and its platform will detect the tracker protocol automatically.

## Typical Requirements Before Setup

- A charged U01 with access to the device SMS configuration method or the official manufacturer tool.
- A SIM card with active data and SMS capability if you will configure APN and GPRS settings.
- The device default password if required for commands or unlocking settings. The public sample password in manufacturer guidance is 123456.
- Access to the manufacturer's configuration instructions or installer tool for firmware specific steps.
- A short test window to verify connectivity after applying settings and restarting the device.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the U01 sends telemetry and positional updates to the shared Plaspy endpoint and port so the platform can ingest, display, and act on that data. The underlying communication is handled by the device GPRS connection and configured server settings.

- The device is configured to report to the Plaspy server endpoint and port using the GPRS settings.
- Telemetry and positioning updates are sent to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy receives reports and automatically detects the protocol used by the tracker.
- The platform ingests SOS or event alerts and forwards them to configured monitoring and alert workflows.
- Regular update intervals control how frequently the U01 sends location and telemetry to Plaspy.

## Common Configuration Workflow

1. Access the official Xexun configuration method for the U01, typically SMS commands or the vendor-provided software or tool.
2. Provide the APN settings for the cellular operator so the device can establish GPRS data. Use the APN placeholders if required.
3. Enter the Plaspy server address as either d.plaspy.com or 54.85.159.138 depending on your preference and firmware support.
4. Set the device port to 8888 and choose UDP or TCP if the device requires explicit transport selection.
5. Apply or save the configuration according to the manufacturer procedure and, if required, restart the device.
6. Validate that the U01 reports to Plaspy by checking the device status or incoming messages in the platform.
7. Monitor for regular position and telemetry updates and adjust reporting intervals as needed.

## Example Configuration Commands

The manufacturer provides SMS based commands for the U01. The sample sequence below uses the device default password 123456. Preserve the placeholders exactly as shown when replacing with your network values.

- Optional initial step to restore factory settings
```text
begin123456
```

- Set the operator APN
```text
apn123456 [apn]
```
Explanation: replace [apn] with your mobile operator APN string.

- Set the APN username
```text
apnuser123456 [apnu]
```
Explanation: replace [apnu] with the APN username if required by your operator. Omit if not used.

- Set the APN password
```text
apnpasswd123456 [apnp]
```
Explanation: replace [apnp] with the APN password if required by your operator. Omit if not used.

- Set the GPRS server to Plaspy using the public IP and port
```text
adminip123456 54.85.159.138 8888
```
Explanation: this command points the device at Plaspy. If your firmware supports DNS names, you may be able to use d.plaspy.com instead of the IP, but many vendor examples use the IP address.

- Set the GPRS mode
```text
gprsmode123456
```
Explanation: use this command to switch the device into GPRS reporting mode if required by the firmware.

- Set the reporting interval to 60 seconds
```text
t060s***n123456
```
Explanation: this command sets the update interval to 60 seconds. Adjust value according to your deployment needs and power constraints.

Follow the commands in the order shown when the order is significant, particularly when performing an initial factory restore and APN configuration before assigning the server.

## Configuration Notes

- The default sample device password shown in manufacturer guidance is 123456. Confirm or change this password using official instructions if needed.
- SMS based setup is a common method for this device; if available, vendor tools or OTA methods may provide an alternative configuration path.
- Firmware versions and hardware revisions can change command syntax and supported parameters. Consult the device documentation when a command is not accepted.
- Choose UDP or TCP according to your network and firewall policies. Plaspy supports either transport on port 8888 and will detect the device protocol.
- Plaspy uses the same port for all supported devices which simplifies multi device deployments.

## Why Use Plaspy with This Configuration

Using the Xexun U01 with Plaspy gives organizations high precision indoor positioning data alongside telemetry and event reporting in a single platform. Configuring the U01 to report to the Plaspy server lets operations teams monitor location, receive SOS alerts, and incorporate vital-sign telemetry into workflows for safety, attendance, and asset tracking.

To learn more about Plaspy and how it can integrate U01 devices into your deployment visit https://www.plaspy.com. For the latest device specific commands and firmware behavior verify current setup details on the manufacturer website https://www.xexun.com/
