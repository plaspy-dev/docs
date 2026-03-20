---
slug: /ev/ev_606/configuration
id: ev_606-configuration
sidebar_label: Configuration
title: EV - EV-606 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for EV EV-606 trackers and how to point the device to Plaspy servers
keywords:
  - EV EV-606 configuration
  - EV EV-606 setup Plaspy
  - EV tracker configuration
  - EV-606 GPS setup
  - EV-606 server configuration
  - Plaspy device setup
  - vehicle tracking EV-606
  - asset tracker EV-606
  - EV personal tracker setup
  - EV-606 SMS commands
---

# EV - EV-606 Configuration

This page covers the public configuration context for using the EV EV-606 tracker with the Plaspy tracking platform. It explains the practical steps and publicly available SMS commands needed to prepare the device to communicate with Plaspy, and it uses the official Plaspy server values that apply to all supported devices.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol once the device is pointed at the Plaspy endpoint. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, and this page references the EV-606 public SMS commands where provided while encouraging verification against official manufacturer documentation.

## Configuration Overview

The goal of configuration is to prepare the EV-606 so it reliably reports location and status data to Plaspy. For the EV-606 this commonly involves setting time zone, APN and enabling the device to change its server address so it can point at Plaspy.

- Point the device to the Plaspy server endpoint using the shared Plaspy server settings.
- Configure the operator APN so the device has data connectivity for GPRS reporting.
- Apply time zone and device-level parameters required for accurate timestamps.
- Validate connectivity so the device appears in Plaspy and begins reporting.
- If manufacturer-side enablement is required, contact the vendor to allow server changes.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol once the device reports

## Typical Requirements Before Setup

- A charged and ready EV-606 device with the factory default password known (default password shown below).
- A SIM card with data enabled and the operator APN configured for GPRS connectivity.
- Ability to send SMS commands to the device or access to the manufacturer configuration tool as required.
- Contact details for the manufacturer or vendor if they must enable server change options on the device.
- Basic knowledge of the device password and the APN values for your mobile operator.

## How This Tracker Connects to Plaspy

The EV-606 is configured to report location and event data to the shared Plaspy server endpoint and port. Once the device has valid cellular data and the server settings are applied, Plaspy will detect the device protocol and begin ingesting the tracker data without requiring manual protocol selection.

- The tracker reports position and event messages to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be set to UDP or TCP depending on device firmware or installer preference.
- Plaspy automatically detects the protocol used by the tracker for correct parsing.
- The device uses GPRS for real time uploads and supports re-uploading data from blind areas when connectivity is regained.
- Successful reporting enables visibility and monitoring of events inside the Plaspy platform.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the EV-606 such as SMS command interface or vendor software.
2. Configure the device APN so it has cellular data access using the manufacturer method.
3. Enter the Plaspy server as either d.plaspy.com or the IP address 54.85.159.138 in the server field.
4. Set the device to use port 8888 for Plaspy communication.
5. Choose UDP or TCP transport if the device requires a transport selection.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device appears and reports correctly in Plaspy, confirming automatic protocol detection.

## Example Configuration Commands

The EV-606 can be configured by SMS using the device password. The publicly available sample SMS commands are shown below. The default device password in these examples is 123456.

- Set the time zone to UTC 0
```text
123456L+00
```

- Set the operator APN (replace the placeholders with your operator values)
```text
123456S1,[apn],[apnu],[apnp]
```
Notes:
- [apn] is the APN name for your mobile operator.
- [apnu] is the APN username if required by your operator; include only if needed.
- [apnp] is the APN password if required by your operator; include only if needed.
- Some operators do not require apnu or apnp; include them only when applicable.

- Set the server IP and port to report to Plaspy (manufacturer enablement may be required)
```text
123456I1,54.85.159.138,8888
```
Notes:
- This command sets the device to report to the Plaspy server IP 54.85.159.138 on port 8888.
- The device may also accept the domain d.plaspy.com as the server address in vendor tools instead of the IP.
- The manufacturer may require enabling the option to change the server before this command is accepted; contact the vendor if the command does not take effect.

Plaspy accepts either UDP or TCP on port 8888 and automatically detects the tracker protocol once messages arrive.

## Configuration Notes

- Manufacturer firmware and hardware revisions can change available SMS commands and required parameters; always verify command syntax against current manufacturer documentation.
- SMS-based setup is supported as shown above, but vendor configuration tools or over the air firmware may also be available depending on your supplier.
- The default password used in public examples is 123456; change device passwords where supported and appropriate for security.
- Some devices require the manufacturer to enable server parameter changes before accepting an I1 style server command.
- Choose TCP or UDP based on installer guidance and firmware capabilities; both transports are accepted by Plaspy on the shared port.

## Why Use Plaspy with This Configuration

Using the EV-606 with Plaspy provides a straightforward path to reliable visibility and monitoring. Pointing this device at Plaspy using the shared server settings ensures that location updates, movement alarms, and stored data re-uploads reach a single platform that automatically recognizes the tracker protocol. This reduces per-device configuration complexity and simplifies fleet or asset consolidation.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest EV EV-606 device specific instructions and firmware details at the manufacturer site http://www.eviewltd.com/. Manufacturer specifications, setup methods, and firmware behavior can change over time so confirm the current process with the official documentation.
