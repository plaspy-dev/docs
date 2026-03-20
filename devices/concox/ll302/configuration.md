---
slug: /concox/ll302/configuration
id: ll302-configuration
sidebar_label: Configuration
title: Concox - LL302 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Concox LL302 with Plaspy server settings and example SMS commands for integration
keywords:
  - Concox LL302 configuration
  - Concox LL302 setup
  - LL302 Plaspy integration
  - Concox tracker configuration
  - LL302 SMS commands
  - GPS tracker setup guide
  - asset tracker Plaspy
  - vehicle tracking LL302
  - LL302 server settings
  - Concox LL302 guide
---

# Concox - LL302 Configuration

This page documents the public configuration context for using the Concox LL302 with Plaspy. It consolidates the Plaspy server settings you must apply to the device, describes the typical setup workflow and prerequisites, and includes the manufacturer SMS commands that are publicly available for configuring the tracker to report to Plaspy. Use this guide to prepare an LL302 for integration into a Plaspy fleet or asset monitoring deployment.

Plaspy uses a shared server endpoint and port for all supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer side steps can vary by firmware version, hardware revision, installation type, or vendor configuration tools, so treat the commands and examples below as practical public guidance and verify any device specific differences with Concox documentation where needed.

## Configuration Overview

Configuring the LL302 for Plaspy prepares the device to send GNSS positions and sensor telemetry to the platform so assets appear and report reliably in Plaspy. The process centers on setting the correct APN, pointing the tracker to the Plaspy server endpoint, confirming the reporting interval, and enabling GPRS data reporting. The LL302 supports SMS based configuration, which is commonly used in the field for remote devices.

- Set the device APN so it can establish a cellular data session for reporting.
- Configure the GPRS server using the Plaspy domain or IP and the shared port used by Plaspy.
- Set the reporting interval (timer) to control how often the LL302 uploads position and telemetry.
- Enable GPRS mode on the LL302 to allow data reporting rather than only SMS.
- Verify the device configuration and confirm the tracker appears and reports in Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration
- Server IP 54.85.159.138 as an alternative server endpoint
- Port 8888 used for device connections
- Transport support: configure the device for UDP or TCP depending on device options
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged LL302 with accessible SMS or the official Concox configuration method
- An active SIM card with data enabled and the correct APN for the mobile operator
- SMS credit or the ability to send SMS commands from the installer phone if using SMS configuration
- Access to the device serial number or identifier so you can confirm the correct unit in Plaspy
- A clear view of GNSS sky for initial position fixes and any firmware checks
- Knowledge of the operator APN and any APN username or password required by the carrier

## How This Tracker Connects to Plaspy

When configured with Plaspy server settings the LL302 reports position and telemetry to the shared Plaspy endpoint. Plaspy ingests the data, applies automatic protocol detection, and exposes device updates, events, and alerts in the platform for monitoring and workflows.

- The LL302 sends periodic location updates to d.plaspy.com or 54.85.159.138 on port 8888
- The device uses cellular data (GPRS/LTE) for reporting after GPRS is enabled
- Plaspy automatically detects the tracker protocol so no protocol selection is needed on the platform side
- Sensor events such as tamper, movement, and optional temperature data are transmitted to Plaspy
- Platform visibility enables geo fence, low battery, and movement alerts for operational monitoring

## Common Configuration Workflow

1. Access the official Concox configuration method for the LL302 (SMS commands or vendor software) as provided by the manufacturer.
2. Set the device APN using the operator APN values so cellular data is available.
3. Enter the Plaspy server endpoint either as d.plaspy.com or 54.85.159.138 and set port 8888.
4. Choose UDP or TCP if the tracker requires a transport selection for GPRS reporting.
5. Set the reporting interval (timer) to the desired frequency and enable GPRS data reporting on the device.
6. Apply or save the configuration and restart the device if required by the firmware or installer instructions.
7. Validate the device reports to Plaspy and appears in the platform with telemetry and location updates.

## Example Configuration Commands

The LL302 supports SMS based configuration. Below are the publicly available example SMS commands and the recommended order when performing a full setup. Send each line as a single SMS message from the registered phone number as described by Concox. Labelled commands are optional where indicated.

- Optional factory reset (use only when needed for initial or troubleshooting setup)
```text
FACTORY#
```

- Set time zone to UTC 0
```text
GMT,E,0#
```

- Set the operator APN
```text
APN,[apn]{{# if apnu }},[apnu]{{/if}}{{# if apnp }},[apnp]{{/if}}#
```
Explanation: replace [apn] with your mobile operator APN. If your operator requires an APN username or password use [apnu] and [apnp] respectively. If no username or password is required, send only APN,[apn]#.

- Set the GPRS server to the Plaspy domain (recommended DNS option)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server to the Plaspy IP (alternative)
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the update interval to every 60 seconds
```text
TIMER,60#
```
Alternative interval format
```text
TIMER,60,60#
```

- Enable GPRS data reporting
```text
GPRSON,1#
```

- Verify GPRS and server parameters
```text
GPRSSET#
```

Note: The exact syntax above is taken from public Concox LL302 configuration examples. Preserve placeholders and replace them with your operator values when sending commands.

## Configuration Notes

- Firmware variations and hardware revisions can change available commands or syntax. Confirm command availability for your LL302 variant and firmware release.
- The LL302 supports SMS based configuration as shown above; some installers prefer vendor software or a configuration tool when available.
- You can configure the server using either d.plaspy.com or the IP address 54.85.159.138; both must use port 8888 which Plaspy uses for all supported devices.
- Choose UDP or TCP depending on the tracker option and network considerations; Plaspy will auto detect the device protocol when it connects.
- Keep APN credentials and SIM account details handy; incorrect APN settings are the most common cause of failed data reporting.

## Why Use Plaspy with This Configuration

Using the LL302 with Plaspy provides a straightforward path to bring long endurance GNSS tracking and sensor telemetry into a centralized fleet management environment. The combination of the LL302's multi source positioning and Plaspy's shared server endpoint simplifies device onboarding, allowing teams to monitor location, tamper events, and environmental data for assets and vehicles.

To learn more about the Plaspy platform and how it ingests device telemetry visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and hardware variant details confirm current documentation from Concox at https://www.iconcox.com/ as manufacturer specifications and setup methods can change over time.
