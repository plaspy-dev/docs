---
slug: /globalsat/dg_388/configuration
id: dg_388-configuration
sidebar_label: Configuration
title: GlobalSat - DG-388 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GlobalSat DG-388 with Plaspy server settings, SMS command examples, and practical setup guidance
keywords:
  - GlobalSat DG-388 configuration
  - GlobalSat DG-388 setup
  - DG-388 Plaspy configuration
  - DG-388 tracking software configuration
  - DG-388 GPS platform setup
  - Plaspy device configuration
  - GPS data logger configuration
  - historical route import Plaspy
  - GlobalSat PC tool export
  - DG-388 telemetry import
---

# GlobalSat - DG-388 Configuration

This page describes the public configuration context for using the GlobalSat DG-388 with Plaspy. It focuses on the practical server settings, the typical workflow for preparing the device for ingestion into Plaspy, and public command examples that are used by some GlobalSat tools and workflows. Use this guide to understand how to point compatible devices or exporter tools to Plaspy for route import and telemetry processing.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installer tools, or vendor workflows. The DG-388 is primarily a standalone GNSS data logger that is normally used with the supplied PC download tool for exporting tracks; however, where public configuration commands exist they are shown below for completeness and for variants or tools that support remote configuration.

## Configuration Overview

The goal of configuration is to prepare the DG-388 or its export tool to deliver recorded telemetry to Plaspy for analysis, archival, and reporting. This covers setting the server endpoint in any device or software that supports uploading or reporting to a remote server, validating the connection, and confirming visibility in the Plaspy platform.

- Configure the device or PC export tool to point at the shared Plaspy server endpoint so exported sessions are import-ready.
- Provide required transport settings and save the configuration so the device or tool knows where to send data.
- Validate connectivity and confirm the device or exported track files appear in Plaspy after upload or ingestion.
- Where applicable, use the public SMS or command templates shown below to set server and port values in compatible firmware or vendor tools.
- Use the DG-388 PC tool to export logged tracks and import them into Plaspy for historical route reconstruction and telemetry analysis.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the tracker may be configured using UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol when devices connect

These values are shared across all devices supported by Plaspy; the platform uses the same port for all supported devices and handles protocol detection automatically.

## Typical Requirements Before Setup

- Ensure the DG-388 is charged and able to run the vendor PC download tool for track export.
- Have access to the official GlobalSat PC tool or the manufacturer configuration method for your unit.
- Know the device IMEI or identifier if required by any command template or vendor tool.
- If you plan to use SMS or remote commands (where supported by a device variant or connected module), ensure the device supports SMS and you have an active SIM and SMS capability.
- Confirm the Plaspy server settings (d.plaspy.com or 54.85.159.138 and port 8888) are entered exactly as provided.
- Prepare a way to verify connectivity such as uploading a small test track or checking device activity in Plaspy.

## How This Tracker Connects to Plaspy

When configured to report to Plaspy or when exported tracks are ingested, the DG-388 data becomes visible to the Plaspy platform for history, analysis, and reporting. The following points summarize how the device or its exported data integrates with Plaspy workflows.

- The device or related export tool is configured to report or upload to the shared Plaspy endpoint d.plaspy.com (or 54.85.159.138) on port 8888.
- Transport can be either UDP or TCP if the device or variant requires a transport selection when pointing to Plaspy.
- Plaspy automatically detects the tracker protocol when the device connects, so the same port and server settings work across supported devices.
- Once data is received, Plaspy processes location points and makes them available for timeline, route import, and telemetry analysis.
- Validation involves confirming the device or export tool successfully delivers files or connections that appear in the Plaspy dashboard.

## Common Configuration Workflow

1. Access the official GlobalSat PC tool, SMS interface, or manufacturer configuration method for your DG-388 or the specific product variant.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the server/host field of the configuration interface.
3. Set the port to 8888 (Plaspy uses the same port across supported devices).
4. Choose UDP or TCP if your device or tool requires a transport selection.
5. Apply or save the configuration in the manufacturer tool or send the configuration command via the supported method.
6. Restart or reboot the device if the configuration method requires it to take effect.
7. Validate that the device or exported session reports to Plaspy by checking for incoming data or importing an exported track into the Plaspy platform.

## Example Configuration Commands

The following public command templates are provided in manufacturer and vendor materials for configuring server and port values by SMS in compatible units or variants. Preserve the placeholders when you prepare commands. These examples are shown in the order they appear in the public source. If your DG-388 variant does not support SMS configuration, use the PC export/import workflow instead.

- Setup command template (set server, port, APN placeholders if applicable)
```text
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

- Reboot command template (optional, use if a reboot is required)
```text
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Notes on placeholders and checksum:
- {{imei}} — replace with the device IMEI or identifier used by your vendor tool or command format.
- [apn], [apnu], [apnp] — APN, APN username, and APN password placeholders. Include them only if your device variant requires cellular data configuration; for the DG-388 data logger these fields may not be applicable unless you are configuring a cellular-enabled variant or an associated modem.
- {{checksum}} and {{checksumreeboot}} — the checksum is calculated over the command text up to but not including the '*' character. The public checksum method provided in manufacturer samples is a bytewise XOR of each ASCII character in the command string. The resulting checksum is formatted as an uppercase two-digit hexadecimal value and appended where shown.
- These commands are intended for SMS-based configuration flows where supported. If your unit does not support SMS, apply server settings through the official PC tool and export/import workflow.

## Configuration Notes

- Firmware and hardware revisions may change the exact command syntax or supported parameters; check manufacturer documentation for the DG-388 variant you have.
- SMS-based configuration templates are included here because they appear in public vendor materials; use them only if your device or connected modem explicitly supports SMS programming.
- Choose UDP or TCP according to the device or tool capability; Plaspy accepts either on port 8888 and will detect the protocol automatically.
- The DG-388 is primarily a standalone GNSS data logger that uses the supplied PC software for exporting tracks; use the PC export/import method when live reporting is not available or not required.
- Always verify configuration after applying settings by performing a small test upload or by confirming appearance of data in Plaspy.

## Why Use Plaspy with This Configuration

Using the DG-388 together with Plaspy lets organizations and individuals combine high-quality historical GNSS logs with Plaspy's telemetry processing and reporting. The DG-388's long-duration logging and accurate GNSS points provide trusted route history that enriches Plaspy maps, timelines, and analytics for fleet records, travel logs, and incident review.

To learn more about Plaspy and how it ingests historical and live telemetry, visit https://www.plaspy.com. For the latest device-specific setup instructions, firmware information, and manufacturer details for GlobalSat products, verify documentation on the GlobalSat website https://www.globalsat.com.tw/ as procedures and firmware behavior can change over time.
