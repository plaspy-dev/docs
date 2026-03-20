---
slug: /topshine/mt06/configuration
id: mt06-configuration
sidebar_label: Configuration
title: TopShine - MT06 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopShine MT06 showing required Plaspy server settings, SMS commands and setup workflow
keywords:
  - TopShine MT06 configuration
  - TopShine MT06 setup
  - MT06 Plaspy setup
  - TopShine GPS tracker configuration
  - MT06 SMS commands
  - TopShine server settings Plaspy
  - MT06 GPRS setup
  - TopShine tracker integration
  - vehicle tracking MT06
  - fleet tracking TopShine
---

# TopShine - MT06 Configuration

This page covers the public configuration context for using the TopShine MT06 tracker with Plaspy. It explains the practical steps and public commands commonly used to prepare the MT06 for reporting to Plaspy, including the shared server settings used across Plaspy deployments and sample SMS configuration commands that are commonly published for this model.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol when the device connects. Manufacturer-side setup steps can vary with firmware, hardware revision, installation type, and vendor tools, so treat the commands and workflow here as practical guidance that complements the official device documentation.

## Configuration Overview

Configuring the MT06 for Plaspy prepares the device to send position and event data to the Plaspy platform and makes the tracker visible and manageable in your fleet console. The process typically includes setting the device identity, configuring the mobile operator APN, pointing the tracker to the Plaspy endpoint, and switching the unit to GPRS reporting mode.

- Set the device identifier so Plaspy can match incoming messages to the correct asset.
- Configure the mobile data APN and optional APN username and password for cellular connectivity.
- Point the tracker to Plaspy using the shared server settings so location and events arrive in the platform.
- Enable GPRS reporting mode and set a reporting interval to control update frequency.
- Validate connectivity and IMEI so the device appears in Plaspy and starts sending telemetry.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and accessible MT06 unit with a visible IMEI for registration and configuration.
- A valid SIM card with data and SMS capability inserted and active on the cellular network you intend to use.
- A phone or SMS gateway capable of sending configuration SMS messages if using SMS-based setup.
- Access to the manufacturer's configuration instructions or tools for your specific firmware revision.
- Knowledge of your operator APN and optional APN username and password values for data connection.
- A Plaspy account or administrator access so you can confirm the device appears and reports correctly.

## How This Tracker Connects to Plaspy

The MT06 is configured to send location fixes and event messages to the shared Plaspy server endpoint and port so Plaspy can ingest those messages into live maps, history, and alerts. Plaspy accepts connections over the declared transport and determines the correct protocol automatically.

- The tracker sends GPRS data to the Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy accepts UDP or TCP connections and will detect the tracker protocol for parsing.
- Position updates and alarm events reported by the MT06 become visible in Plaspy dashboards and reports.
- Device behavior such as relay control or alarm signals can trigger actions and workflows inside Plaspy.
- Using the shared Plaspy server and port simplifies device onboarding because the same network settings apply to all supported trackers.

## Common Configuration Workflow

1. Access the official TopShine manufacturer configuration method for the MT06 (SMS commands or any provided software) and confirm the device IMEI.
2. Enter the Plaspy server address either as domain d.plaspy.com or as IP 54.85.159.138 in the tracker settings.
3. Set the Plaspy port to 8888 in the tracker configuration.
4. Choose UDP or TCP on the device if the tracker requires a transport selection; Plaspy will automatically detect the protocol regardless of this choice.
5. Configure the mobile operator APN and optional APN username and password so the device can connect to GPRS.
6. Apply or save the configuration and restart the device if required by the manufacturer.
7. Validate that the device reports to Plaspy by checking the device's presence and live updates in your Plaspy account.

## Example Configuration Commands

The MT06 commonly supports SMS-based configuration. The sample SMS commands below use the device default password 000000 in the command prefix. Replace placeholders and values as appropriate for your device and operator.

- Note: The default device password shown in public examples is 000000. If your device uses a different password, replace 000000 in each command.

- Optional initial factory reset (use only when needed):
```text
W000000,990,099###
```

- Set the device ID using the first 14 digits of the IMEI (Plaspy uses the full 15 digit IMEI as the device identifier). Replace {{IMEI14}} with the first 14 digits of the IMEI:
```text
W000000,010,{{IMEI14}}
```

- Set the operator APN. Replace {{apn}} with your operator APN. If your APN requires username and password, include {{apnu}} and {{apnp}}:
```text
W000000,011,{{apn}}
```
Or with APN user and password:
```text
W000000,011,{{apn}},{{apnu}},{{apnp}}
```
(Placeholders: {{apn}} is your operator APN, {{apnu}} is APN username, {{apnp}} is APN password.)

- Set the GPRS server to Plaspy using the public Plaspy server IP and port:
```text
W000000,012,54.85.159.138,8888
```
(You may alternatively enter the domain d.plaspy.com in devices that accept a domain name for the server.)

- Switch the device to GPRS reporting mode:
```text
W000000,013,2
```

- Set the location update interval (example value 6; consult manufacturer docs for interval units and valid ranges):
```text
W000000,014,6
```

- Verify the device IMEI via SMS:
```text
W000000,601
```

Follow the sequence above when ordering matters: for example, configure APN and GPRS server before switching to GPRS mode. Use the reset command only when required.

## Configuration Notes

- SMS-based configuration is commonly used for the MT06 and is reflected in published command examples; ensure your SMS sender uses the correct format and default password.
- Some firmware revisions or regional variants may accept domain names like d.plaspy.com instead of the IP 54.85.159.138; choose the form your device supports.
- Plaspy uses a single port for all devices and will automatically detect the protocol; you still may need to choose UDP or TCP on the device if required by the firmware.
- APN, APN username, and APN password are operator specific; confirm these values with your mobile provider before configuring.
- Always cross-check commands against the manufacturer's latest documentation for your MT06 firmware version because command formats and available parameters can change.

## Why Use Plaspy with This Configuration

Using the MT06 with Plaspy provides a straightforward path to real-time vehicle visibility, event notification, and operational monitoring without complex per-device networking. The shared Plaspy server settings and automatic protocol detection reduce configuration friction during rollouts, while the MT06's compact, low-power design and relay control capabilities make it suitable for discreet installations and basic immobilizer workflows.

To learn more about Plaspy and how this configuration fits into fleet tracking workflows visit https://www.plaspy.com. For the latest device specific configuration methods, command syntax, and firmware details verify information on the manufacturer site https://www.gztopshine.com/
