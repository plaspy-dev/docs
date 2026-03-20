---
slug: /topshine/mt02/configuration
id: mt02-configuration
sidebar_label: Configuration
title: TopShine - MT02 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure TopShine MT02 for Plaspy real time tracking using shared server settings and SMS or GPRS setup
keywords:
  - TopShine MT02 configuration
  - TopShine MT02 setup
  - MT02 server configuration
  - Plaspy setup guide
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet management tracker
  - GPRS SMS configuration
  - MT02 Plaspy compatibility
  - TopShine MT02 guide
---

# TopShine - MT02 Configuration

This page documents the public configuration context for using the TopShine MT02 with the Plaspy platform. It collects the practical, publicly available settings and SMS command examples used to point an MT02 device at Plaspy servers and to perform basic device setup steps. Use this guide to prepare a device for integration with Plaspy and to understand what to verify before activation.

Plaspy uses a shared server endpoint and port across supported devices and automatically detects the tracker protocol. Manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the commands here as public examples rather than a one size fits all procedure. When available, this page includes the MT02 SMS commands provided by the manufacturer for GPRS and SMS configuration and brief notes about placeholders you must replace.

## Configuration Overview

This configuration process prepares an MT02 so it can communicate reliably with Plaspy for real time tracking and telemetry. The goal is to set network access (APN), point the tracker at Plaspy server settings, select the transport if required, and confirm the device is sending reports.

- Configure the device APN and network access so GPRS can be used as the reporting channel.
- Set the device server address to Plaspy so messages are delivered to d.plaspy.com or its IP.
- Ensure the device reports on the Plaspy port and choose UDP or TCP where the device requires a transport selection.
- Validate device identity and reporting using the IMEI and verification commands.
- Confirm data is visible in Plaspy and adjust reporting interval as needed.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the MT02. Plaspy uses the same port for all supported devices and the platform automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure whichever the device requires
- Plaspy automatically detects the tracker protocol when messages arrive

## Typical Requirements Before Setup

- A valid cellular SIM with data enabled and correct APN settings for the local operator.
- Access to SMS or the manufacturer configuration tool to send setup commands to the MT02.
- The device powered and accessible (installed or on bench power) so it can register to the network.
- The MT02 IMEI number for device identification and device id construction.
- Knowledge of the device password if it has been changed from the factory default.
- A Plaspy account or administrator access to verify the device appears on the platform after setup.

## How This Tracker Connects to Plaspy

The MT02 is configured to send periodic position and telemetry messages to the Plaspy server endpoint and port. Plaspy ingests these reports and presents them as location updates, alarms, and historical traces on the platform. The shared server and port arrangement simplifies configuration across many device types.

- The tracker uploads location and telemetry to the Plaspy endpoint d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be either UDP or TCP depending on device configuration; Plaspy accepts both and detects protocol automatically.
- Regular position reports and event messages (alarms, inputs) are forwarded to Plaspy for mapping and alerting.
- When offline, the MT02 can log data locally and upload stored records once a connection is available.
- Platform visibility is validated by confirming the device IMEI and seeing incoming messages on Plaspy.

## Common Configuration Workflow

1. Access the official TopShine configuration method for the MT02, typically SMS commands or the manufacturer tool, and verify the current device password.
2. Enter the Plaspy server by domain or IP using either d.plaspy.com or 54.85.159.138 as the GPRS server address.
3. Set the port to 8888, noting that Plaspy uses the same port for all supported devices.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Apply or save the configuration on the device and, if applicable, perform a power cycle or restart to ensure settings take effect.
6. Validate that the device reports to Plaspy by checking the platform for incoming messages associated with the device IMEI.
7. Adjust reporting intervals and alarm thresholds as required and confirm ongoing connectivity.

## Example Configuration Commands

The MT02 supports SMS based configuration. Below are the manufacturer provided SMS command templates and a short explanation for each. The sample commands use the factory default password 000000 where required. Label the reset command as optional for initial setup or troubleshooting.

- Optional factory reset (use only when required to clear custom settings):
```text
W000000,990,099###
```

- Set the device ID (use the first 14 digits from the IMEI for this command). Note: Plaspy identifies devices by the full IMEI; use the IMEI as your primary reference.
```text
W000000,010,{{device_id_14}}
```
Explanation: Replace {{device_id_14}} with the first 14 digits of the device IMEI.

- Set the operator APN. Replace placeholders with your operator values. If username or password are required include them after the APN separated by commas.
```text
W000000,011,[apn]{{,[apnu],[apnp]}}
```
Explanation: [apn] = operator APN. [apnu] = APN username if required. [apnp] = APN password if required. Include the username and password only when your operator requires them.

- Set the GPRS server to the Plaspy IP and port so the device reports directly to Plaspy:
```text
W000000,012,54.85.159.138,8888
```

- Switch reporting mode to GPRS (example value from manufacturer):
```text
W000000,013,2
```
Explanation: This command commonly selects GPRS as the primary reporting channel. Confirm the numeric mode with current manufacturer documentation or firmware notes.

- Set the upload/reporting interval (example value where 6 is a manufacturer defined interval):
```text
W000000,014,6
```
Explanation: Adjust the final parameter to the reporting interval appropriate for your deployment.

- Get device IMEI (verification command):
```text
W000000,601
```

Notes about SMS commands:
- Commands above show the factory password 000000 inserted after the command prefix. If the device password has been changed, substitute the current password.
- Replace placeholders such as [apn], [apnu], and [apnp] with your operator settings. Replace {{device_id_14}} with the appropriate IMEI-derived ID per manufacturer guidance.
- After making changes by SMS you may need to restart the device for settings to apply.

## Configuration Notes

- Firmware and hardware revisions can change the exact SMS syntax and supported parameter values; always confirm with the device documentation for your specific MT02 SKU.
- The MT02 supports SMS and GPRS configuration methods. Use SMS commands for remote setups where physical access is limited, or use the official TopShine software when available.
- Choose UDP or TCP according to installer preference or network behavior; Plaspy accepts both and will auto detect the tracker protocol.
- All devices reporting to Plaspy use the same port so consistent use of port 8888 simplifies multi device deployments.
- If you perform a factory reset, consider reapplying custom passwords and re-verifying APN and server settings as these may be cleared.

## Why Use Plaspy with This Configuration

Using the TopShine MT02 with Plaspy provides a practical path to integrate vehicle location, fuel telemetry, and anti-theft controls into a single fleet management workflow. Configuring the device to point at Plaspy's shared server and port ensures that position and device events are routed into the platform for mapping, alerts, and reporting.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration guidance and firmware behavior with the manufacturer at https://www.gztopshine.com/ Note that manufacturer specifications, setup methods, and device behavior can change over time so always confirm the current instructions on the official TopShine documentation pages.
