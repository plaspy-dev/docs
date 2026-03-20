---
slug: /globalsat/tr_350/configuration
id: tr_350-configuration
sidebar_label: Configuration
title: GlobalSat - TR-350 Configuration
sidebar_class_name: menu_item_tracker
description: Guide to configuring the GlobalSat TR-350 for Plaspy with server settings SMS commands and practical setup steps
keywords:
  - GlobalSat TR-350 configuration
  - TR-350 setup
  - TR-350 Plaspy
  - Plaspy tracker configuration
  - GlobalSat GPS tracker setup
  - TR-350 SMS configuration
  - TR-350 server settings
  - personal GPS tracker configuration
  - MPERS tracker setup
  - TR-350 tracking platform setup
---

# GlobalSat - TR-350 Configuration

This page documents the public configuration context for using the GlobalSat TR-350 with Plaspy. It summarizes the shared Plaspy server settings you must apply, explains the common setup workflow, and presents the publicly available SMS configuration commands used to point a TR-350 at Plaspy. Use this as a practical reference for integrating the TR-350 into Plaspy while also reviewing official device documentation for firmware and vendor specific details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The TR-350 description and the SMS command examples below are the publicly available configuration materials; if you need device management tools or remote provisioning consult GlobalSat or your device reseller for the most current instructions.

## Configuration Overview

Configuring the TR-350 for Plaspy prepares the tracker to send location and status data to a single, shared Plaspy endpoint and enables visibility in your Plaspy account. The public configuration workflow typically uses the device IMEI and an APN plus Plaspy server settings to establish reporting.

- Configure the device to point its server endpoint to Plaspy so the platform receives telemetry and events.
- Set the device APN and, where required, APN username and password so cellular data and SMS commands function.
- Verify the device IMEI and SMS command format used to provision the tracker remotely.
- Save and apply settings, then validate the device appears in Plaspy and is reporting location and status events.
- Optional reboot or restart of the device to make settings take effect and begin reporting to Plaspy.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A TR-350 device with a charged battery and powered on.
- A working SIM card with data and SMS enabled if you will send configuration SMS or the device uses cellular data for telemetry.
- The device IMEI number available and validated for provisioning.
- Access to the manufacturer configuration method such as SMS provisioning, vendor software, or a web portal as provided by GlobalSat or your reseller.
- Knowledge of the carrier APN and optional APN username and password for cellular connectivity where required.
- A phone or SMS gateway capable of sending the configuration messages shown below if using SMS based provisioning.

## How This Tracker Connects to Plaspy

The TR-350 is configured to report its location and status to the shared Plaspy server endpoint and port so Plaspy can ingest telemetry and generate alerts. Once configured, Plaspy receives the device GNSS fixes, event notifications, and device health updates for monitoring and response.

- The tracker points reporting to d.plaspy.com or the Plaspy IP 54.85.159.138 on port 8888.
- Transport can be configured as UDP or TCP where the device requires a transport selection.
- Plaspy automatically detects the tracker protocol when the device connects to the shared port so no per device protocol selection is required in the platform.
- Events such as SOS, motion, fall advisories, battery state, and connectivity are relayed into Plaspy for alerts and dashboard visibility.
- After successful configuration, confirm the tracker appears and reports data in your Plaspy instance.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the TR-350, or prepare the SMS provisioning workflow recommended by GlobalSat.
2. Enter the Plaspy server as d.plaspy.com or use the IP 54.85.159.138 when the device requires an IP address instead of a domain.
3. Set the port to 8888 for all devices as required by Plaspy.
4. Choose UDP or TCP if the device requires you to select a transport protocol during setup.
5. Apply or save the configuration on the device or send the manufacturer specified SMS commands to apply settings.
6. Restart or reboot the device if the manufacturer instructions indicate a reboot is required to apply network settings.
7. Validate the device reports to Plaspy by confirming the device appears in the platform and that location and status updates are visible.

## Example Configuration Commands

The TR-350 can be configured using SMS commands. The public provisioning format included by the device vendor shows a setup command and a reboot command. Replace the placeholders with your actual values before sending.

Format hint used by Plaspy provisioning
TSPRXAB27GHKLMnaicz*U!

Setup command template
- Replace {{imei}} with the device IMEI.
- Replace [apn], [apnu], and [apnp] with your carrier APN, APN username, and APN password as required.
- The command string requires a checksum value calculated over the text before the asterisk then appended in uppercase hexadecimal two digit form.

Setup command
```text
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Optional reboot command (use if required to apply settings)
```text
GSC,{{imei}},3,0,LH*{{checksum}}!
```

Checksum calculation
- The checksum is the bytewise XOR of all characters in the command substring before the '*' character.
- Convert the XOR result to an uppercase hexadecimal string of two characters (pad with a leading zero if needed).
- The device vendor provided example included a small JavaScript routine that computes this XOR checksum; implement the same logic in your SMS gateway or compute it manually before sending.

Placeholders explained
- {{imei}}: the device IMEI number required by the command to target a specific tracker.
- [apn]: your carrier access point name for data connectivity.
- [apnu]: carrier APN username if required by your SIM profile.
- [apnp]: carrier APN password if required by your SIM profile.
- {{checksum}}: the XOR checksum value as described above.

Follow the command order as shown when provisioning. Sending the setup command first and then the reboot command is a common sequence when a reboot is required for settings to take effect.

## Configuration Notes

- Firmware and regional device variants can change supported command formats or required parameters; confirm commands against the device firmware revision in your possession.
- The TR-350 supports SMS based provisioning in public documentation; use an SMS capable phone or gateway and ensure SMS delivery is permitted by your SIM and carrier.
- Choose TCP or UDP based on your installation needs and any carrier behavior; Plaspy accepts either transport on port 8888 and will detect the device protocol automatically.
- Always keep the device IMEI and carrier APN details accurate when constructing SMS commands to avoid misprovisioning.
- If a restart is required to apply settings, the provided reboot command is the public method shown in the vendor content.

## Why Use Plaspy with This Configuration

Using the GlobalSat TR-350 with Plaspy provides a straightforward way to bring personal safety telemetry into a unified monitoring platform. The TR-350’s design for MPERS use cases — including SOS events, motion and fall advisories, and location reporting — complements Plaspy’s real time ingestion and alerting so caregivers and operations teams can act on actionable device events.

Learn more about Plaspy and how it supports device integrations on the main site https://www.plaspy.com. For device specific setup instructions, firmware behavior, and the latest manufacturer details verify the current documentation at the GlobalSat website https://www.globalsat.com.tw/.
