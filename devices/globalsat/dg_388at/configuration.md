---
slug: /globalsat/dg_388at/configuration
id: dg_388at-configuration
sidebar_label: Configuration
title: GlobalSat - DG-388AT Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GlobalSat DG-388AT showing Plaspy server settings workflow and example commands for integration
keywords:
  - GlobalSat DG-388AT configuration
  - GlobalSat DG-388AT setup
  - DG-388AT GPX export
  - GlobalSat tracker configuration
  - DG-388AT BLE pairing
  - Plaspy device configuration
  - Plaspy GPS import
  - DG-388AT tracking software configuration
  - GlobalSat DG-388AT server configuration
  - GPS logger Plaspy integration
---

# GlobalSat - DG-388AT Configuration

This page provides public configuration context for using the GlobalSat DG-388AT with Plaspy. It explains how the DG-388AT integrates into Plaspy workflows, highlights the shared Plaspy server settings you will apply when a device supports direct server configuration, and documents publicly available example commands when present. The DG-388AT is primarily described as a standalone GPS data logger with Bluetooth Low Energy for export and GPX import into Plaspy, and that use case is central to the guidance below.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when devices send data to the platform. Manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools. Some public content for this model also includes SMS-based configuration commands; if your particular DG-388AT unit or regional variant supports SMS or remote server configuration, those commands are provided in the Example Configuration Commands section for reference.

## Configuration Overview

This configuration process prepares a DG-388AT for use with Plaspy either by exporting recorded tracks (GPX) via BLE and importing them into Plaspy, or by pointing a device that supports remote server configuration to Plaspy’s shared endpoint. The goal is to ensure your recorded routes and telemetry are visible in Plaspy for mapping, reporting, and historical analysis.

- Prepare the DG-388AT to communicate with Plaspy by ensuring you can export data or configure a server endpoint.
- Validate device connectivity and data export via the ez-Connect app or the supplied PC utility before importing to Plaspy.
- Configure server endpoint and transport if your device variant supports direct server pointing to Plaspy.
- Confirm that exported GPX files contain the expected waypoints and timestamps for accurate import into Plaspy.
- Restart or reboot the device after applying server settings when required to ensure changes take effect.

## Plaspy Server Settings

- Plaspy server domain d.plaspy.com
- Plaspy server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration options
- Plaspy automatically detects the tracker protocol when device data arrives

Note that Plaspy uses the same port (8888) for all supported devices and can detect the incoming protocol automatically.

## Typical Requirements Before Setup

- A charged and operational DG-388AT with accessible BLE pairing and export tools for GPX retrieval.
- A smartphone, tablet, or PC with the ez-Connect app or the device PC utility installed to pair and export GPX files.
- Access to a Plaspy account and the ability to upload GPX files or confirm device data visibility in the Plaspy platform.
- Knowledge of the device IMEI if the manufacturer or public configuration flow requires it for remote commands.
- If your unit or region includes a cellular or SMS-capable variant, have any required APN values and access to SMS for sending configuration commands.
- Manufacturer documentation or support channels available for firmware-specific instructions and troubleshooting.

## How This Tracker Connects to Plaspy

The DG-388AT primarily integrates with Plaspy through exported route files and app-driven workflows, but public configuration content also shows a path for devices that support remote server configuration.

- For the standard workflow, pair the DG-388AT via BLE and use ez-Connect to export GPX files, then upload these files to Plaspy for mapping and analysis.
- If a device or regional variant supports remote server configuration, it can be pointed to Plaspy using the domain d.plaspy.com or the IP 54.85.159.138 and port 8888 with UDP or TCP as transport.
- Once data reaches Plaspy, the platform automatically detects the tracker protocol and makes historical telemetry visible in dashboards and reports.
- Importing GPX maintains waypoint timestamps and positions so Plaspy can reconstruct routes and provide analytics and visualization.
- Validate uploads or live server connections in Plaspy to confirm that records appear as expected.

## Common Configuration Workflow

1. Access the official GlobalSat configuration method for your DG-388AT unit (ez-Connect app, PC utility, or other manufacturer-supplied tool).
2. If your unit supports direct server configuration, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the server/host field.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP if the device requires a transport selection for server communication.
5. Apply or save the configuration in the device tool or send the configuration commands according to the manufacturer instructions.
6. Restart or reboot the device if required by the manufacturer to apply new server settings.
7. Validate that the device reports to Plaspy or that exported GPX files upload successfully and display expected waypoints and timestamps in Plaspy.

If your DG-388AT deployment uses the standard BLE + GPX path, pair with ez-Connect, export the GPX file, and import that file into Plaspy instead of configuring a live server endpoint.

## Example Configuration Commands

The following example commands are extracted from publicly available manufacturer-styled configuration content. They use placeholders that you must replace with device-specific values before sending. Preserve the placeholders when preparing commands:

- {{imei}} — replace with the device IMEI when required by the command format.
- {{apn}}, {{apnu}}, {{apnp}} — APN placeholders for cellular variants; only relevant if your unit supports cellular or SMS-based configuration.
- {{checksum}} and {{checksumreeboot}} — hexadecimal checksum values computed over the command text before the star character.

Primary setup command (replace placeholders and compute checksum as described below):

```
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

Optional reboot command (label this as reboot or apply step if required):

```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Checksum calculation (public reference): compute a single-byte XOR checksum over the full command text up to but not including the '*' character, then convert that byte to a two-digit uppercase hexadecimal string. Place the resulting two-character hex value into the {{checksum}} placeholder. The example JavaScript used in the public content computes checksum by XOR of character codes and converts to uppercase hex with two characters.

Important: those SMS-style commands are present in public documentation but may only apply to variants or configurations that support SMS or remote server commands. The primary DG-388AT workflow remains BLE export to GPX and import into Plaspy unless your hardware or firmware documentation confirms server-side configuration.

## Configuration Notes

- Firmware and hardware revisions can change available configuration methods; always verify which options your DG-388AT unit supports before proceeding.
- For SMS or remote server commands, the checksum step is required and must be computed exactly as the manufacturer specifies to avoid rejected commands.
- Choose UDP or TCP based on the device configuration options; Plaspy accepts either on port 8888 and detects the protocol automatically.
- The DG-388AT is primarily a BLE GPS data logger that exports GPX for Plaspy import; direct server configuration is only applicable to units or variants that provide that capability.
- Keep a copy of any exported GPX files as a record before importing them into Plaspy for auditing and troubleshooting.

## Why Use Plaspy with This Configuration

Using the DG-388AT with Plaspy gives teams a practical way to bring detailed, historical route data into a centralized analytics and mapping platform. For organizations that value route reconstruction, post-activity review, or batch imports from standalone loggers, the BLE + GPX export workflow provides a low-cost, reliable path to retain and analyze movement history within Plaspy.

Learn more about Plaspy and how it can process and visualize imported telemetry at https://www.plaspy.com. Device-specific configuration methods, firmware behavior, and manufacturer details can change over time; verify the latest setup steps and technical documentation for the DG-388AT at the official GlobalSat website https://www.globalsat.com.tw/.
