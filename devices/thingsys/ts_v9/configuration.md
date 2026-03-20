---
slug: /thingsys/ts_v9/configuration
id: ts_v9-configuration
sidebar_label: Configuration
title: ThingSys - TS-V9 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the ThingSys TS-V9 for use with Plaspy using public server settings and example SMS or GPRS setup guidance
keywords:
  - ThingSys TS-V9 configuration
  - ThingSys TS-V9 setup for Plaspy
  - TS-V9 server configuration
  - TS-V9 GPS tracker configuration
  - ThingSys GPS tracker setup
  - TS-V9 SMS commands
  - TS-V9 GPRS configuration
  - Plaspy tracker configuration
  - Vehicle GPS tracker setup
  - ThingSys TS-V9 integration
---

# ThingSys - TS-V9 Configuration

This page covers the public configuration context for using the ThingSys TS-V9 tracker with the Plaspy platform. It collects the practical server settings and the example SMS and GPRS configuration commands that are commonly used to point a TS-V9 device at Plaspy for real time tracking and telemetry ingestion. Use this page as a practical reference while following manufacturer guidance for device-specific tools and firmware differences.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so treat the commands here as a public example that complements the official ThingSys documentation and your deployment procedures.

## Configuration Overview

The goal of the configuration process is to prepare the TS-V9 so it reliably communicates position and telemetry to Plaspy and appears in your Plaspy account. The public settings shown on this page are all that Plaspy requires to receive device traffic; manufacturer-specific steps establish those settings on the device.

- Configure the device GPRS or SMS reporting settings so the tracker sends data to the Plaspy server endpoint.
- Set the APN, APN username and APN password for the SIM carrier used by the tracker.
- Point the device to the Plaspy server endpoint and the shared port used by Plaspy.
- Choose transport (UDP or TCP) if the device requires a transport selection during setup.
- Validate connectivity and confirm the device shows up in Plaspy with live position and telemetry.
- Use the device verification commands to check current settings where supported.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when devices connect

Note: Plaspy uses the same port for all supported devices, and the platform will auto-detect the tracker protocol once the device reaches the server.

## Typical Requirements Before Setup

- A TS-V9 unit installed or accessible for configuration by SMS or the manufacturer configuration tool.
- An active SIM card with a data plan and SMS capability inserted in the tracker when using GPRS or SMS setup.
- Access to the official ThingSys configuration method or software for your TS-V9 firmware and hardware revision.
- Basic device information such as the device IMEI and the default device password if required for SMS or tool commands.
- A test procedure or Plaspy account to validate that the tracker reports and is visible in the platform.
- A safe test environment to power cycle or restart the device during configuration if required.

## How This Tracker Connects to Plaspy

The TS-V9 can be configured to report position and telemetry over cellular GPRS/3G/4G or to accept SMS control messages. When configured for platform reporting, the device sends its data to the Plaspy server endpoint and port listed above. Plaspy ingests those messages and maps them to devices by their identifiers.

- The tracker is configured to report to the shared Plaspy endpoint d.plaspy.com or the server IP 54.85.159.138 on port 8888.
- Data can be sent over either UDP or TCP depending on device settings and installer preference.
- Plaspy automatically detects the tracker protocol and decodes supported message formats for display in the platform.
- Once reporting is active the device provides location updates and telemetry that appear in Plaspy dashboards and alerting workflows.
- SMS-based commands can be used for device configuration and verification where the device supports SMS management.

## Common Configuration Workflow

1. Access the official ThingSys configuration method or software appropriate for your TS-V9 and firmware version. This can be SMS commands or a vendor configuration tool.
2. Enter the Plaspy server endpoint either as the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888. All devices in Plaspy use the same port.
4. Choose UDP or TCP if the device requires a transport selection during configuration.
5. Configure carrier APN, APN username, and APN password as required by the SIM provider.
6. Apply or save the configuration, then restart the device if the manufacturer instructions require a reboot.
7. Validate that the device reports to Plaspy by confirming it appears in the platform and sends regular position/telemetry updates.

If you use SMS for initial setup, include the device password in SMS commands when required. The example SMS command set below shows typical public commands used with TS-V9 devices.

## Example Configuration Commands

The TS-V9 supports SMS-based configuration using the device password. The sample public SMS commands below reflect the order and placeholders that are commonly used. The device default password shown in the public configuration content is 123456. Keep placeholders such as [apn], [apnu], and [apnp] and replace them with your carrier APN values.

1. Optional initial factory reset (only when needed)
```
FORMAT
```
Label: optional initial setup or when a full factory reset is required before reconfiguration.

2. Set the operator APN
```
apn123456 [apn]
```
Replace [apn] with your carrier APN string.

3. Set the APN username
```
apnuser123456 [apnu]
```
Replace [apnu] with the APN username if your carrier requires one. Leave blank or omit if not required.

4. Set the APN password
```
apnpasswd123456 [apnp]
```
Replace [apnp] with the APN password if required by the carrier.

5. Set the GPRS server (IP and port)
```
ip54.85.159.138 8888
```
This command points the device to the Plaspy server IP and port. The public server domain d.plaspy.com may also be supported by other configuration tools; the IP is shown here as provided in the public command list.

6. Check current device settings
```
CXZT
```
Use this verification command to request current configuration details from the device where supported.

Notes on placeholders: [apn] is the carrier APN. [apnu] and [apnp] are the APN username and password placeholders. Keep the device password (123456 in the public example) present in the command format if the device requires authentication for SMS configuration.

## Configuration Notes

- SMS configuration is supported by the public TS-V9 command set shown above; manufacturer tools or PC software may provide the same settings in a GUI form.
- Firmware versions and hardware revisions can change exact command syntax and available features. Always confirm the syntax with the latest ThingSys documentation.
- Choose UDP or TCP based on stability and carrier network behavior in your deployment region; Plaspy will accept either on port 8888 and auto-detect the protocol.
- When using SMS commands, preserve the device password prefix and replace only the placeholder values with carrier-specific settings.
- After applying settings, a device restart may be required for changes to take effect; verify with the CXZT check command or the manufacturer tool.

## Why Use Plaspy with This Configuration

Using the TS-V9 configured to report to Plaspy gives fleets and operators a single, consistent endpoint for collecting real time position and vehicle telemetry. Plaspy's automatic protocol detection and the shared server port make it straightforward to onboard TS-V9 devices once they are set to report to the platform, enabling mapping, alerts, and history for operational monitoring.

To learn more about Plaspy and how it handles device integration and fleet workflows visit https://www.plaspy.com. For the most current device specific setup instructions, protocol files, and firmware details consult the official ThingSys documentation at https://www.thingsys.com/ to verify manufacturer procedures and any firmware dependent behavior.
