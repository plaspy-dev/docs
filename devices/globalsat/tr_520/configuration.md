---
slug: /globalsat/tr_520/configuration
id: tr_520-configuration
sidebar_label: Configuration
title: GlobalSat - TR-520 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring the GlobalSat TR-520 to report to Plaspy with practical SMS command examples and server settings
keywords:
  - GlobalSat TR-520 configuration
  - GlobalSat TR-520 setup
  - GlobalSat TR-520 Plaspy
  - TR-520 server configuration
  - TR-520 GPS tracker setup
  - Plaspy device configuration
  - GlobalSat tracker setup
  - TR-520 tracking platform setup
  - GPS tracker configuration guide
  - vehicle asset tracking TR-520
---

# GlobalSat - TR-520 Configuration

This page documents the public configuration context for using the GlobalSat TR-520 with Plaspy. It focuses on the practical server settings and the manufacturer-provided SMS configuration example included in public materials, and shows how to apply those settings so the device can report into Plaspy for tracking and telematics workflows.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The TR-520 supports SMS-based configuration in the public example below and sends data over low power wide area networks; follow manufacturer instructions for any device-specific steps.

## Configuration Overview

The goal of this configuration process is to prepare the TR-520 to communicate reliably with Plaspy and to validate that the device appears in your Plaspy account. The public configuration example for this model uses SMS commands to set APN and server parameters, then reboot the device so changes take effect.

- Set the device APN and network parameters so the TR-520 can connect over LTE‑M or NB‑IoT.
- Point the tracker at the Plaspy server endpoint and port so data is delivered to the platform.
- Choose UDP or TCP transport on the tracker if required by the device interface.
- Save and apply settings, then reboot the tracker so it begins reporting to Plaspy.
- Validate device visibility and telemetry within Plaspy after the device comes online.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol so no protocol selection is required in the platform
- All devices in Plaspy use the same port for reporting

## Typical Requirements Before Setup

- A SIM installed in the tracker with data and SMS capability if you plan to use SMS-based configuration.
- Power and basic device readiness (charged battery or connected power) so the device can reboot and register on the network.
- The tracker IMEI available for commands and device identification.
- Access to the manufacturer configuration method appropriate for your device and firmware (SMS, mobile app, or vendor tool).
- Mobile network coverage for LTE‑M or NB‑IoT in the deployment area so the tracker can reach Plaspy.
- Credentials or knowledge of the APN settings for the cellular operator (use the placeholders if needed).

## How This Tracker Connects to Plaspy

When configured, the TR-520 will report location, motion events, and device status to the shared Plaspy server endpoint. Plaspy receives incoming reports on the same port for all devices and automatically determines the device protocol to process messages.

- The tracker is configured to send data to the Plaspy endpoint d.plaspy.com (or the IP 54.85.159.138) on port 8888.
- Transport can be configured as UDP or TCP depending on the tracker configuration interface.
- Plaspy performs automatic protocol detection so the platform can ingest the tracker messages without manual protocol selection.
- After configuration and reboot, the device should register and appear in Plaspy for monitoring, rule processing, and historical reporting.
- Regular telemetry and event messages keep Plaspy updated on location, movement, and device health.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the TR-520 (for example, SMS commands or the vendor mobile app) as provided by GlobalSat.
2. Set the APN and any operator credentials required for the device to obtain a data connection.
3. Enter d.plaspy.com or the server IP 54.85.159.138 as the server endpoint in the device configuration.
4. Set the server port to 8888 and choose UDP or TCP transport if the device requires an explicit transport selection.
5. Apply or save the configuration in the device; if using SMS, send the manufacturer command that programs those settings.
6. Restart or reboot the device if required by the configuration method so the new settings take effect.
7. Validate that the device reports to Plaspy and appears in your platform dashboard or device list.

## Example Configuration Commands

Public manufacturer content for the TR-520 shows SMS-based commands. The provider also indicates a format string used by Plaspy for messages. Use the following public SMS command examples to set APN and server parameters and to reboot the device. Preserve the placeholders shown and replace them with your values before sending.

Notes on placeholders
- {{imei}} — the device IMEI number used in the SMS command to target that specific tracker.
- {{apn}} — the cellular APN string for your SIM operator.
- {{apnu}} — APN username if required by the operator.
- {{apnp}} — APN password if required by the operator.
- {{checksum}} and {{checksumreeboot}} — computed two character hexadecimal checksum values required by the device SMS protocol (see checksum explanation below).

The SMS command format referenced by the manufacturer materials includes an example format string used by Plaspy:
TSPRXAB27GHKLMnaicz*U!

Setup command (replace placeholders and compute checksum):
```
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Reboot command (optional or when required to apply settings):
```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Checksum calculation
- The public example computes a checksum by XORing the character codes of the command text up to but not including the '*' character, then converting the result to a two character uppercase hexadecimal string. Include that two character hex after the '*' placeholder when sending the SMS.
- Many vendor tools or scripts compute this automatically; if you build a manual SMS, compute the checksum exactly as described.

Format note
- The manufacturer HTML references a format string and an SMS command format. When using SMS commands, ensure the entire command is formed exactly and that the device supports SMS programming on your firmware.

## Configuration Notes

- The TR-520 public example uses SMS-based configuration; confirm that your device firmware and SIM support SMS configuration before relying on this method.
- Firmware revisions or hardware variants can change required command syntax or checksum behavior; always verify commands against the manufacturer documentation for your device revision.
- Choose UDP or TCP transport according to site installation requirements; Plaspy accepts either on port 8888 and will handle protocol detection automatically.
- Plaspy uses the same port for all supported devices; only the server host (d.plaspy.com or the IP 54.85.159.138) and the device-specific settings need to be applied.
- When available, use the manufacturer's mobile app or official configuration tool to reduce manual command errors and to simplify checksum calculation.

## Why Use Plaspy with This Configuration

Configuring the TR-520 to report to Plaspy provides a straightforward way to collect long-life, low-power location and motion data from assets, vehicles, or animals in the field. With the TR-520's LTE‑M and NB‑IoT connectivity and Plaspy's server endpoint handling, you can consolidate telemetry, event alerts, and device status into a single platform for monitoring and operational workflows.

To learn more about Plaspy and how it integrates with trackers like the GlobalSat TR-520 visit https://www.plaspy.com. For the latest device specific instructions, firmware notes, and official commands verify current information on the manufacturer website https://www.globalsat.com.tw/ as manufacturer specifications and setup methods can change over time.
