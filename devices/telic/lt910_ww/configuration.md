---
slug: /telic/lt910_ww/configuration
id: lt910_ww-configuration
sidebar_label: Configuration
title: Telic - LT910-WW Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Telic LT910 WW for use with Plaspy including required server settings and example SMS commands
keywords:
  - Telic LT910 WW configuration
  - LT910 WW setup for Plaspy
  - Telic GPS tracker configuration
  - Plaspy tracker setup
  - LT910 WW server configuration
  - vehicle tracking LT910
  - fleet management LT910 WW
  - IoT terminal configuration
  - Telic tracker APN setup
  - SMS configuration LT910
---

# Telic - LT910-WW Configuration

This page documents the public configuration context for using the Telic LT910-WW with Plaspy. It explains the shared server settings used by Plaspy, the practical steps to prepare the device for cloud reporting, and the common manufacturer side commands that are publicly available for this model. Use this page as a practical reference when preparing an LT910-WW for Plaspy integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so you do not need to provide a protocol type to Plaspy. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The example SMS commands shown on this page are publicly available guidance for the LT910-WW and should be validated against the device firmware and Telic documentation before deployment.

## Configuration Overview

Preparing an LT910-WW for Plaspy primarily means configuring the device to use the Plaspy server endpoint, ensuring cellular data connectivity and APN settings are correct, and validating that the device reports to the Plaspy platform. The publicly documented SMS commands for this model show how to set APN, server address, and enable GPRS reporting when SMS configuration is used.

- Configure the tracker to report to Plaspy server settings so telemetry is routed to your Plaspy instance.
- Set the cellular APN and credentials so the LT910-WW has data connectivity.
- Switch the device to GPRS or data mode and save the configuration.
- Validate that the tracker sends position and status to Plaspy and appears in your account.
- Use Telic documentation and device tools as needed for firmware specific options or advanced features.

## Plaspy Server Settings

When configuring the LT910-WW to communicate with Plaspy, use these public Plaspy server values exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so no manual protocol selection is required by Plaspy

Note that all devices in Plaspy use the same port and Plaspy will perform automatic protocol detection for supported tracker formats.

## Typical Requirements Before Setup

- A valid SIM card with a data plan and the correct APN settings for the mobile operator.
- Access to the LT910-WW configuration channel used by the device firmware such as SMS based commands or the official Telic configuration tool.
- Device power and a stable supply to perform configuration and testing.
- The device password if required for remote commands for example the default password in public examples is 123456.
- Knowledge of your operator APN values and any APN username and password if required.
- A way to verify the device is reporting to Plaspy such as access to the Plaspy account or platform view.

## How This Tracker Connects to Plaspy

The LT910-WW is configured to send telemetry and status over the cellular data link to the shared Plaspy server endpoint and port. Once the server and APN are set, the device forwards its telemetry to Plaspy where the platform ingests the data and presents position, events, and device status.

- Device sends location and status packets to d.plaspy.com or the Plaspy server IP at 54.85.159.138 on port 8888.
- Tracker may use UDP or TCP to transmit data depending on the device firmware and your transport selection.
- Plaspy automatically detects the protocol used by the tracker and routes the data into your Plaspy instance.
- Reports and events become visible in Plaspy dashboards and alerts once the device reaches the server.
- Confirming successful reporting is the final step to validate connectivity and visibility in Plaspy.

## Common Configuration Workflow

1. Access the official Telic configuration method for the LT910-WW such as the documented SMS command set or the Telic configuration tool.
2. Enter the Plaspy server address either as domain d.plaspy.com or as IP 54.85.159.138 depending on the device command syntax.
3. Set the port to 8888 as Plaspy uses this same port for all supported devices.
4. Choose UDP or TCP on the device if the firmware requires explicit transport selection.
5. Configure the APN and any APN username and password necessary for operator data connectivity.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate the device is reporting to Plaspy by checking device status in the Plaspy platform and looking for recent telemetry.

## Example Configuration Commands

The following example commands are extracted from publicly available Telic instructions for the LT910-WW. These are SMS commands shown in public documentation. The sample commands use the device password 123456 which is listed as the default in the public configuration sample. Keep placeholders such as [apn], [apnu], and [apnp] and replace them with your operator values.

- Optional initial factory reset command
```text
begin123456
```

- Set the time zone to UTC 0
```text
time zone123456 0
```

- Set the APN for your mobile operator
```text
apn123456 [apn]
```
Replace [apn] with your operator APN string.

- Set the APN username and password if required
```text
up123456 [apnu] [apnp]
```
Replace [apnu] and [apnp] with the APN username and password. This command is only needed if your operator requires APN credentials.

- Set the GPRS server to the Plaspy server IP and port
```text
adminip123456 54.85.159.138 8888
```
You may also use the domain d.plaspy.com where device commands accept hostnames.

- Switch the device to GPRS data mode
```text
gprs123456,1,1
```
or, on some firmwares, the simpler form:
```text
gprs123456
```

- Check current device settings
```text
check123456
```

Notes on these commands
- The default password shown in the public sample is 123456. If your device password has been changed, use the current password.
- Replace placeholders exactly and verify operator APN values before sending.
- If using domain names instead of the IP, some devices accept the domain d.plaspy.com in place of the IP.

## Configuration Notes

- Manufacturer firmware versions and command syntax can differ; verify commands against your LT910-WW firmware revision and Telic documentation before mass deployment.
- SMS based configuration is a common public method for this model but the manufacturer may also provide software tools or a PC configuration utility.
- Choose UDP or TCP based on installation needs and device behavior. Plaspy supports both and will detect protocol automatically on its end.
- All devices in Plaspy use the same port 8888; do not change the port unless instructed by Plaspy support.
- Preserve secure credentials and avoid sending passwords in unsecured channels when possible.

## Why Use Plaspy with This Configuration

Using the LT910-WW with Plaspy gives organizations the ability to centralize device telemetry from a rugged industrial terminal that supports global cellular connectivity. When configured to the Plaspy endpoint and validated, the LT910-WW can forward location, status, and event information into Plaspy for monitoring, geofencing, alerts and historical reporting.

To learn more about Plaspy and how it can ingest data from devices like the LT910-WW visit https://www.plaspy.com. For the latest device specific configuration guidance, firmware notes and command reference verify details on the manufacturer website https://www.telic.de as hardware and firmware behavior can change over time.
