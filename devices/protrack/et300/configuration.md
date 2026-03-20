---
slug: /protrack/et300/configuration
id: et300-configuration
sidebar_label: Configuration
title: Protrack - ET300 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configuring the Protrack ET300 for Plaspy with server settings SMS commands and verification steps
keywords:
  - Protrack ET300 configuration
  - Protrack ET300 setup
  - Protrack ET300 Plaspy
  - Protrack ET300 server settings
  - Protrack ET300 SMS configuration
  - ET300 GPS tracker configuration
  - ET300 setup guide
  - Protrack GPS tracker configuration
  - vehicle tracker ET300 setup
  - fleet tracking ET300 Plaspy
---

# Protrack - ET300 Configuration

This page provides public configuration guidance for using the Protrack ET300 with the Plaspy platform. It summarizes the shared server settings Plaspy requires, explains typical preparation steps, and includes the common SMS configuration commands that are published for the ET300 to point the device at Plaspy for real time tracking and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but the exact manufacturer side setup steps can vary by device firmware, hardware revision, installation type, and vendor tools. The ET300 is Plaspy compatible out of the box and supports SMS based configuration and GPRS reporting as shown in the example commands below.

## Configuration Overview

Configuring the ET300 for Plaspy means preparing the device to send position and event data to Plaspy's shared server endpoint so the device becomes visible and reportable in the platform. This process commonly uses the ET300's SMS command interface to set APN and server details, enable GPRS, and tune reporting intervals.

- Set the device APN so the tracker can access mobile data for GPRS reporting.
- Point the tracker to the Plaspy server domain or IP so telemetry is routed to Plaspy.
- Configure the reporting interval and enable GPRS mode for live updates.
- Validate the configuration using the device status and parameter check commands.
- Confirm the device appears and reports correctly in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device side
- Plaspy automatically detects the tracker protocol when the device connects
- Plaspy uses the same port for all supported devices so the ET300 should use port 8888

## Typical Requirements Before Setup

- A powered ET300 device installed per the manufacturer's installation guidance and accessible for configuration.
- A functioning data capable SIM provisioned with a correct APN for the local mobile carrier.
- Ability to send SMS commands to the tracker from a known configuration phone number if SMS setup is used.
- Access to the official Protrack configuration method or documentation for the ET300 to confirm device-specific steps.
- Basic knowledge of the device identifier (IMEI) and how to verify device health after configuration.
- A Plaspy account and vehicle/device provisioning on the Plaspy platform so the device can be associated after it begins reporting.

## How This Tracker Connects to Plaspy

When configured, the ET300 reports location fixes, events, and logged trips to the shared Plaspy server endpoint and port. Plaspy ingests the device telemetry and makes it available for live tracking, alerts, and historical reporting through the platform.

- The tracker sends GPRS data to d.plaspy.com (or the listed IP) on port 8888 so Plaspy receives position and event messages.
- Plaspy automatically detects the tracker protocol on connection so no protocol selection is required in the platform.
- Events such as geo-fence breaches, over-speed warnings, immobilizer/fuel cutoff actions, and power outage notifications are forwarded to Plaspy for alerting.
- Regular position updates are used for real-time visibility and historical trip reconstruction in Plaspy.
- Verification commands on the tracker can confirm parameters and connection status before platform validation.

## Common Configuration Workflow

1. Access the official Protrack ET300 configuration method or software and review the published SMS command set and APN requirements.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 and, if the device requires, choose UDP or TCP as the transport option.
4. Configure the carrier APN using the device APN command including any APN username or password placeholders if required.
5. Apply or save the configuration on the device and enable GPRS reporting or GPRS mode.
6. Restart or power cycle the device if the manufacturer recommends a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking device status with tracker commands and confirming the device appears in your Plaspy account.

## Example Configuration Commands

The ET300 supports SMS based configuration. The following public commands are provided in the ET300 documentation and should be sent as SMS messages to the device in the order shown when that order matters.

- Configure the carrier APN. Replace the placeholders with the carrier APN values. Keep the braces when preparing templates if you use automated provisioning.

```
APN,[apn]
```

- If your APN requires username and password, use the extended APN form. Placeholders are shown and must be replaced with your carrier credentials when needed.

```
APN,[apn],[apnu],[apnp]#
```

- Set the GPRS server to point to Plaspy using the domain and the port 8888. This command configures server entry 1 to use d.plaspy.com and port 8888.

```
SERVER,1,d.plaspy.com,8888,0#
```

- Set the location update interval (example uses 60 seconds for both moving and stationary reporting). Adjust the numbers as required by your fleet policy.

```
TIMER,60,60#
```

- Enable GPRS mode so the tracker sends data over the mobile network.

```
GPRSON,1#
```

- Verify device parameters to review current configuration on the tracker.

```
PARAM#
```

- Check tracker status for a quick health and connectivity report.

```
STATUS#
```

Notes on placeholders
- [apn] = your carrier APN string.
- [apnu] = APN username if required by the carrier.
- [apnp] = APN password if required by the carrier.
Preserve placeholders when building scripts or templates and replace them with your carrier values before sending.

## Configuration Notes

- SMS based configuration is supported for the ET300 as shown in the example commands; some installations may also support USB or software tools depending on firmware.
- Firmware or regional device variants can change command syntax or available parameters; always confirm the exact commands for your device revision.
- If a device requires selecting TCP or UDP, choose the transport preferred by your network and ensure the device is set consistently with the Plaspy server port 8888.
- Some carrier APNs require username and password fields while others do not; use the APN placeholders to provide credentials when necessary.
- Rebooting or power cycling the tracker after applying server and APN settings often helps the device register on the network and begin reporting.

## Why Use Plaspy with This Configuration

Using the Protrack ET300 with Plaspy provides a straightforward path to reliable real-time tracking, event reporting, and historical trip analysis for small fleets and individual vehicles. The ET300's support for immobilizer control, geofence alerts, over-speed warnings, and power outage detection maps directly to Plaspy features for monitoring, alerting, and operational oversight.

Learn more about Plaspy and how it can manage ET300 devices at https://www.plaspy.com. Manufacturer configuration details and firmware behavior can change over time, so please verify the latest device specific setup information on the Protrack website at http://www.protrackgps.in/.
