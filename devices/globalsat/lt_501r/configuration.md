---
slug: /globalsat/lt_501r/configuration
id: lt_501r-configuration
sidebar_label: Configuration
title: GlobalSat - LT-501R Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for integrating the GlobalSat LT 501R with Plaspy using shared server settings
keywords:
  - GlobalSat LT-501R configuration
  - LT-501R setup for Plaspy
  - GlobalSat GPS tracker configuration
  - LT 501R server configuration
  - LT 501R Plaspy integration
  - LT 501R tracking software setup
  - GlobalSat asset tracker configuration
  - LoRaWAN tracker setup Plaspy
  - LT 501R SMS configuration
  - GPS tracker platform configuration
---

# GlobalSat - LT-501R Configuration

This page covers the public configuration context for using the GlobalSat LT-501R tracker with Plaspy. It gathers the practical, public settings and example commands shown by the device vendor so you can prepare the tracker to report to Plaspy. Use this as a deployment reference alongside the manufacturer's documentation and your chosen installation procedures.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The LT-501R is primarily a LoRaWAN asset tracker, and the information here includes a vendor-supplied SMS configuration example that maps the device to Plaspy's TCP or UDP endpoint when that method is available for your firmware.

## Configuration Overview

The objective of configuration is to make the LT-501R visible and report its telemetry to Plaspy reliably. That typically means setting the device to point at Plaspy's server endpoint, selecting the appropriate transport, and validating that reports reach the platform.

- Configure the tracker to report to Plaspy's shared server endpoint so location and sensor data are ingested.
- Choose the correct transport (UDP or TCP) where the device requires a transport selection.
- Provide any required cellular APN or connectivity parameters when the device firmware supports IP reporting via SMS.
- Apply and save configuration, then restart or reboot the device so new settings take effect.
- Validate connectivity in Plaspy to confirm the tracker is reporting and visible in your workspace.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the LT-501R for direct reporting to Plaspy:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP are supported; configure whichever the device requires
- Plaspy automatically detects the tracker protocol when data arrives

Note that all devices in Plaspy use the same port. Enter either the domain d.plaspy.com or the IP 54.85.159.138 and set port 8888 in the device configuration.

## Typical Requirements Before Setup

- A powered LT-501R unit with access to its IMEI or device identifier
- Access to the manufacturer configuration method for your unit such as SMS commands, vendor web or desktop tools, or USB configuration utilities
- If the device uses cellular IP reporting, a working SIM card and appropriate APN information for the SIM provider
- A method to send configuration SMS messages from a phone or service that can reach the device
- Access to Plaspy and a workspace where the device will appear once it reports successfully
- Awareness of the device firmware version and any regional variant differences that might affect available commands

## How This Tracker Connects to Plaspy

The LT-501R is configured to report to the shared Plaspy server endpoint and port so that Plaspy can ingest telemetry for mapping, alerts, and history. Where vendor firmware permits, the device may be pointed at Plaspy via IP or domain and set to use TCP or UDP transport.

- The device sends location and sensor payloads to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy receives the incoming packets and automatically detects the tracker protocol for parsing.
- Telemetry received by Plaspy becomes live location updates, historical tracks, and event notifications in your workspace.
- Configure transport as UDP or TCP on the device if the firmware requires a transport choice.
- After configuration, monitoring in Plaspy validates reporting and operational status.

## Common Configuration Workflow

1. Access the official GlobalSat configuration method for your device. This can be the documented SMS command format, vendor software, or USB/serial tools depending on the LT-501R firmware and region.
2. Enter the Plaspy server as either the domain d.plaspy.com or the IP 54.85.159.138 in the device server or endpoint field.
3. Set the reporting port to 8888 (this is the single shared port Plaspy uses for all devices).
4. Choose UDP or TCP if the device requires you to select a transport protocol.
5. Provide any required APN settings or connectivity parameters (use placeholders such as [apn], [apnu], and [apnp] where applicable).
6. Apply or save the configuration on the device and, if required, reboot the device to activate the new settings.
7. Validate in Plaspy that the device reports successfully and appears in your workspace with expected telemetry.

## Example Configuration Commands

The vendor example includes SMS-based configuration commands. These are public commands provided in the model configuration content and are reproduced here in readable form. Preserve the placeholders and compute the checksum as shown by the vendor when sending the SMS.

- Format note from the vendor: Format used by Plaspy TSPRXAB27GHKLMnaicz*U!

- Setup command (replace placeholders and compute checksum before sending):
```text
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```
Explanation:
- {{imei}} — replace with the device IMEI number.
- [apn] — APN name for the SIM operator.
- [apnu] — APN username if required by your SIM provider; leave blank if not required.
- [apnp] — APN password if required by your SIM provider; leave blank if not required.
- E0 and E1 are the Plaspy server IP and port respectively as provided above.
- A1=1 typically enables the first server slot on the device (follow vendor docs for mode meaning).
- {{checksum}} is a two digit hexadecimal checksum computed over the command text up to but not including the '*' character.

- Optional reboot command (use after configuration if a restart is required):
```text
GSC,{{imei}},3,0,LH*{{checksum}}!
```
Label: Reboot the device (optional if your workflow requires a reboot to apply settings).

Checksum calculation (vendor provided method):
- The checksum is the XOR of all character codes in the command string up to the '*' character.
- Convert the resulting number to a two character uppercase hexadecimal value (pad with leading zero if needed) and place it in the {{checksum}} placeholder.
- Many vendor tools or web utilities compute this checksum automatically; if sending SMS manually you may need to use an external helper to compute it.

Important: Always verify the exact command syntax for your firmware revision before sending SMS commands. The examples above are the public vendor format present in the device documentation.

## Configuration Notes

- Firmware differences and regional variants may change available commands or parameter names; confirm commands match your LT-501R firmware.
- The example above shows SMS based configuration; some installers use manufacturer software or USB tools that handle checksums and parameter encoding automatically.
- When offered, choose UDP or TCP based on your network environment; Plaspy accepts both and will parse the incoming protocol automatically.
- Because Plaspy uses the same port for all devices, ensure port 8888 is reachable from the device network path when using IP reporting.
- Keep manufacturer documentation handy for any device specific flags such as server slot selection or A1 parameter behavior.

## Why Use Plaspy with This Configuration

Using Plaspy with the LT-501R brings asset focused telemetry into a single platform where teams can monitor location, motion events, and sensor detections for long life deployments. Plaspy ingests the configured device traffic and provides mapping, alerts, and historical reporting that help operations and asset protection teams respond quickly and maintain situational awareness.

To learn more about Plaspy and how it ingests tracker data, visit https://www.plaspy.com. For device specific setup details, firmware notes, and the most current manufacturer documentation for the LT-501R series, verify information on the GlobalSat website https://www.globalsat.com.tw/ as vendor specifications and setup methods can change over time.
