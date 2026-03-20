---
slug: /topten/pg99/configuration
id: pg99-configuration
sidebar_label: Configuration
title: TopTen - PG99 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for TopTen PG99 tracker showing how to configure the device to work with Plaspy using shared server settings
keywords:
  - TopTen PG99 configuration
  - TopTen PG99 setup
  - PG99 Plaspy configuration
  - PG99 tracker setup guide
  - TopTen GPS tracker configuration
  - vehicle tracking PG99
  - asset tracking PG99
  - PG99 server setup
  - Plaspy tracker configuration
  - PG99 SMS commands
---

# TopTen - PG99 Configuration

This page documents the public configuration context for using the TopTen PG99 GPS tracker with Plaspy. It covers the shared server settings Plaspy requires, the practical SMS commands that are commonly used with TopTen devices, and the general workflow to prepare the device so it can report to Plaspy. Use this as a technical setup reference that complements the official manufacturer materials.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The PG99 can be configured via SMS commands as shown in the public manufacturer information; this page explains how those public commands relate to Plaspy server settings and what to check before integrating the device.

## Configuration Overview

The goal of configuration is to prepare the PG99 so it reliably communicates with Plaspy and appears in your Plaspy account. This involves setting the device APN and server endpoint, ensuring the device identifier used by Plaspy matches the tracker, and validating that the tracker reports as expected.

- Configure the device APN and GPRS server settings so the PG99 can reach the Plaspy endpoint.
- Register the correct tracker identifier (the PG99 uses the last 14 digits of the IMEI as the tracker ID in the PAR response).
- Use the public SMS commands provided by the manufacturer to apply server and APN settings when required.
- Validate connectivity and reporting so the device is visible in Plaspy and sending periodic updates.
- Test and monitor event reporting such as movement or alarm alerts after configuration.

## Plaspy Server Settings

When configuring any tracker for Plaspy, use the following public server settings exactly as shown here:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: support for UDP or TCP (device may be configured to use either transport)
- Plaspy automatically detects the tracker protocol so you do not need to specify a protocol in Plaspy for each device

Plaspy uses the same port for all supported devices and protocol detection is handled on the platform side.

## Typical Requirements Before Setup

- A charged PG99 device with access to its IMEI (the IMEI is required to map the tracker in Plaspy).
- A working SIM card with data and/or SMS capability and an APN that matches the mobile operator.
- Access to a phone or SMS gateway capable of sending configuration SMS messages if you configure via SMS.
- The official TopTen configuration method or software documentation for your particular firmware revision.
- A basic plan for testing connectivity and reporting to the Plaspy endpoint.
- Optional: a local test environment or console to verify incoming connections if you operate network diagnostics.

## How This Tracker Connects to Plaspy

The public configuration model for the PG99 uses standard device reporting to a Plaspy server endpoint and port so the platform receives position and event updates. The tracker is set to report to the shared Plaspy server endpoint and port using the transport selected during device setup.

- The PG99 is configured to send data to d.plaspy.com (54.85.159.138) on port 8888.
- You may select UDP or TCP as the transport on the device; Plaspy accepts both.
- Plaspy recognizes the tracker protocol automatically so the platform parses incoming messages without per-device protocol settings.
- The device identifier used by Plaspy corresponds to the last 14 digits of the IMEI as returned by the PAR command.
- After configuration, the PG99 will send periodic reports and event-based messages to the Plaspy endpoint for visibility and monitoring.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the PG99 (SMS, manufacturer app, or vendor tool) for your device and firmware.
2. Enter the Plaspy server address by specifying either the domain d.plaspy.com or the IP address 54.85.159.138 in the server field.
3. Set the server port to 8888.
4. Choose UDP or TCP on the device if a transport selection is required by the device interface.
5. Configure the device APN and any required APN username or password values for the SIM (use the placeholders provided by the manufacturer).
6. Apply or save the configuration and restart the device if the device requires a reboot to apply settings.
7. Validate that the device reports to Plaspy (check Plaspy for the tracker appearing under the tracker ID derived from the IMEI).

If you are using SMS-based configuration, use the manufacturer-provided SMS commands in the order recommended.

## Example Configuration Commands

The following commands are taken from the public TopTen PG99 configuration instructions. These are SMS commands sent from an authorized phone number to the device. Preserve the placeholders when you replace them with your actual APN data.

- Optional initial factory restore (if you need to start from factory defaults):
```text
111111CLR
```
Label: Optional initial reset to restore factory settings when needed.

- Set up APN and GPRS server to point the tracker at Plaspy. Replace the {{apn}}, {{apnu}}, and {{apnp}} placeholders with your SIM operator APN, APN username, and APN password as required:
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:{{apn}},{{apnu}},{{apnp}};RPT:60;SLP:60;RUN:2;
```
Notes:
- IPN is set to the Plaspy server IP 54.85.159.138 (you may use the domain d.plaspy.com if your device accepts a domain instead of IP).
- COM sets the server port to 8888 which is the shared Plaspy port.
- APN:{{apn}},{{apnu}},{{apnp}} are placeholders — replace them with the operator APN, username, and password.
- RPT, SLP, RUN are device-specific parameters in the public command sequence; keep them as provided by the manufacturer if applicable.

- Verify or check the current WWW/GPRS settings:
```text
111111WWW:
```
This command requests the tracker to reply with its current WWW configuration so you can confirm IP, port, and APN entries.

Also note: the tracker uses the last 14 digits of the IMEI (the value returned in the PAR command) as the tracker identifier for Plaspy. Ensure you record the IMEI and the corresponding tracker ID when registering or locating the device on the platform.

## Configuration Notes

- Firmware and hardware revisions can change command syntax or available parameters; always verify commands against the firmware version documented by TopTen.
- The PG99 offers SMS-based configuration in public documentation; if you prefer, use the manufacturer software or tools if available and supported for your firmware.
- Choose UDP or TCP according to your deployment needs; Plaspy accepts both transports and will detect the protocol automatically.
- Keep an accurate record of the device IMEI and confirm the tracker ID mapping (last 14 digits of IMEI) so the device is identifiable in Plaspy.
- After configuration, perform an end-to-end verification: send a position request or wait for a scheduled report to confirm the device appears in Plaspy.

## Why Use Plaspy with This Configuration

Using the PG99 with Plaspy gives you a straightforward way to centralize device visibility, event reporting, and basic operational monitoring. By pointing the PG99 to Plaspy's shared server endpoint and port, devices from different deployments report into a single platform that automatically detects protocol and parses incoming data.

To learn more about Plaspy and the platform features, visit https://www.plaspy.com. Please verify the latest device-specific setup details, firmware behavior, and official commands with the manufacturer at http://www.t10.cn since manufacturer specifications and setup methods can change over time.
