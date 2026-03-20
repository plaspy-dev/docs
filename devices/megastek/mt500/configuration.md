---
slug: /megastek/mt500/configuration
id: mt500-configuration
sidebar_label: Configuration
title: Megastek - MT500 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Megastek MT500 with Plaspy servers and SMS setup
keywords:
  - Megastek MT500 configuration
  - MT500 Plaspy setup
  - Megastek MT500 server configuration
  - Megastek ankle tracker setup
  - MT500 SMS commands
  - Prisoner GPS configuration
  - GPS tracker Plaspy integration
  - MT500 GNSS configuration
  - Plaspy device setup
  - Megastek tracker configuration
---

# Megastek - MT500 Configuration

This page documents the public configuration context for using the Megastek MT500 Prisoner GPS Metal Ankle tracker with the Plaspy platform. It focuses on the practical server settings and SMS configuration commands that are commonly used to point MT500 devices at Plaspy so the device can report location, tamper, and geofence events to the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Manufacturer-side setup steps for the MT500 can vary by firmware, hardware revision, installation method, and vendor tools, so this guide provides the public, practical steps and example SMS commands while recommending verification against the official Megastek documentation.

## Configuration Overview

This configuration prepares the MT500 to send GNSS and security event data to Plaspy by setting the device identity, APN, reporting interval, and the GPRS server endpoint. The goal is to ensure the tracker can establish a cellular data session and reach the Plaspy ingestion endpoint so the device becomes visible and manageable in Plaspy.

- Set device identity (ID) to associate the hardware IMEI with your Plaspy record.
- Configure the cellular APN and optional APN user or password so GPRS data can be transmitted.
- Point the device to the Plaspy server endpoint and port so telemetry reaches the platform.
- Set reporting and heartbeat intervals to match monitoring and compliance policies.
- Enable GPRS or data mode so the MT500 sends events to Plaspy rather than only using SMS.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the MT500:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on the device side
- Plaspy automatically detects the tracker protocol when the device connects

Note that all devices in Plaspy use the same port, so port 8888 is the common port for supported devices.

## Typical Requirements Before Setup

- Device is powered and has adequate battery charge for configuration and initial reporting.
- An active cellular SIM installed in the MT500 that supports data and SMS as required.
- The device IMEI available for use when setting the device ID and verifying registration.
- Access to the Megastek SMS command set or the official configuration tool from the manufacturer.
- Coverage in an area where the device can establish a GPRS data session.
- A Plaspy account or project prepared to receive and identify the device feed.

## How This Tracker Connects to Plaspy

When configured, the MT500 uses its cellular link to transmit GNSS positions and security events to the shared Plaspy server endpoint and port. Plaspy normalizes incoming data and makes it available in dashboards and alerting workflows for monitoring and compliance.

- The tracker reports location fixes and timestamps to the Plaspy server endpoint.
- Tamper and removal events are sent to Plaspy for immediate alerting and logging.
- Periodic heartbeats or configured update intervals keep the device visible in the platform.
- Geofence events and boundary breaches are forwarded to Plaspy for enforcement workflows.
- The device is pointed at the Plaspy server (d.plaspy.com or IP 54.85.159.138) on port 8888 using UDP or TCP as selected.

## Common Configuration Workflow

1. Access the official Megastek configuration method or software, or prepare to send SMS configuration commands as provided by the manufacturer.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the server or GPRS server field.
3. Set the port to 8888, which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the MT500 requires a transport selection during setup.
5. Configure the APN and any required APN username or password so the device can use GPRS data.
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot.
7. Validate the device reports to Plaspy by checking for initial position, heartbeat, or event messages in your Plaspy project.

## Example Configuration Commands

The MT500 can be configured via SMS commands sent from an authorized phone number. The commands below are based on public example SMS commands. The device sample uses a default device password of 000000 in these examples. Replace placeholders as noted.

- Set the device ID using the device IMEI (replace <IMEI15> with the device 15 digit IMEI). This associates the IMEI with the device ID field.

```
M000000,22,<IMEI15>
```

- Set the operator APN. Replace {{apn}} with your carrier APN. If your APN needs a username or password, include {{apnu}} and {{apnp}} where shown.

```
M000000,23,{{apn}},{{apnu}},{{apnp}}
```

Explanation: {{apn}} is the access point name required by the cellular operator. {{apnu}} is the APN username and {{apnp}} is the APN password. If no APN username or password is required by the operator, omit those placeholders.

- Set the update interval to 60 seconds. Adjust the numeric interval as needed for your monitoring policy.

```
M000000,25,60
```

- Set the GPRS server to point to Plaspy using the public IP and port. This example uses the Plaspy server IP and the common port 8888.

```
M000000,24,56 54.85.159.138,8888
```

Note: Some devices accept the domain instead of the IP. You can use d.plaspy.com in place of 54.85.159.138 where the device accepts a domain name.

- Enable GPRS or data mode so the device uses the configured server settings.

```
M000000,21,2
```

Notes on these commands:
- The sample shows the device password as 000000. This is the default password in the public example; change the password if you follow your organization security policy.
- Send these SMS commands from the phone number authorized for device administration per Megastek instructions.
- Preserve the order of the commands when order is important during initial setup (for example APN then server then enable data).

## Configuration Notes

- The MT500 supports SMS-based configuration as shown above; alternative manufacturer tools or remote provisioning may also be available depending on firmware and vendor tools.
- Firmware versions and hardware revisions can change command syntax or available options. Verify commands if a response is not received.
- Choose UDP or TCP per your operational preference. Plaspy will automatically detect the tracker protocol when the device connects to the server on port 8888.
- The example commands include a default password in public samples. Change device passwords where appropriate and follow manufacturer security guidance.
- Use the official Megastek documentation for the latest command syntax and any region specific instructions.

## Why Use Plaspy with This Configuration

Using the MT500 with Plaspy provides a single platform for continuous location monitoring, tamper alerting, and geofence enforcement for supervision programs. Pointing the device to Plaspy with the shared server settings gives administrators centralized visibility and the ability to configure alerts and reporting tailored to compliance workflows.

Learn more about Plaspy and how it ingests device telemetry at https://www.plaspy.com. For the most current device specific configuration, firmware behavior, and manufacturer instructions, verify details on the Megastek website https://www.megastek.com/.
