---
slug: /navtelekom/smart_s_2422/configuration
id: smart_s_2422-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2422 Configuration
sidebar_class_name: menu_item_tracker
description: Practical configuration guide for Navtelekom SMART S-2422 to connect with Plaspy using shared server settings and tools
keywords:
  - Navtelekom SMART S-2422 configuration
  - SMART S-2422 Plaspy setup
  - Navtelekom tracker configuration
  - SMART S-2422 server configuration
  - GPS tracker Plaspy compatibility
  - vehicle tracker setup Plaspy
  - fleet tracking Navtelekom SMART S-2422
  - NTC Configurator SMART S-2422
  - Plaspy server settings guide
  - SMART S-2422 installation checklist
---

# Navtelekom - SMART S-2422 Configuration

This page documents the public configuration context for using the Navtelekom SMART S-2422 tracker with Plaspy. It focuses on the practical steps and shared server settings needed to forward GNSS position and telemetry to Plaspy, and it explains what to prepare before integrating the device into the Plaspy platform.

Plaspy uses a single shared server endpoint and port for all supported devices and automatically detects the tracker protocol. Manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and the vendor tools used such as the Windows NTC Configurator. Use this guide for general, public configuration guidance and consult the device manufacturer for device specific details.

## Configuration Overview

Configuring the SMART S-2422 for use with Plaspy means preparing the device to send its location and telemetry to the Plaspy server endpoint and validating that data appears in your Plaspy account. The process primarily involves using the manufacturer configuration tool to point the tracker to Plaspy and ensuring the tracker has cellular connectivity and correct reporting settings.

- Point the device upload server to Plaspy and confirm transport selection if required
- Configure reporting intervals and which inputs or telemetry fields to include
- Verify the device has a working 2G SIM and network coverage for data uploads
- Use the NTC Configurator utility for firmware updates and saved configuration files
- Validate that the tracker reports into Plaspy and that location updates are visible

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol for incoming connections

## Typical Requirements Before Setup

- A SIM card installed and active with data enabled for the device 2G modem
- Power to the SMART S-2422 and any required wiring completed for inputs and outputs
- Windows PC with the NTC Configurator utility or other manufacturer tool used to edit device settings
- Access to Plaspy platform credentials or device registration details to confirm visibility after setup
- Knowledge of the device firmware version so you can apply any firmware specific guidance from Navtelekom
- Physical access to the device for configuration or to attach the device to diagnostic equipment such as a Bluetooth tool when needed

## How This Tracker Connects to Plaspy

When configured for Plaspy the SMART S-2422 sends GNSS position fixes and telemetry over its 2G cellular link to the shared Plaspy server endpoint and port. Plaspy receives the location reports and input state changes so they are available for real time monitoring, alerts, and historical playback.

- The device is configured to upload to d.plaspy.com or directly to 54.85.159.138
- All uploads target port 8888 on the Plaspy server endpoint
- Transport can be UDP or TCP depending on device settings and installer preference
- Plaspy automatically detects the tracker protocol so the same port is usable for all supported devices
- Plaspy ingests reported GNSS positions, input events, and configured telemetry fields for dashboards and alerts

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software such as the NTC Configurator on a Windows PC.
2. Configure the device upload server by entering d.plaspy.com or 54.85.159.138 in the server field.
3. Set the upload port to 8888 in the network or server settings.
4. Choose UDP or TCP if the device requires explicit transport selection for uploads.
5. Configure reporting intervals, inputs to monitor, and any telemetry parameters you need sent to Plaspy.
6. Apply or save the configuration in the manufacturer tool and, if prompted, write the configuration to the device.
7. Restart the device if required by the configurator or after applying changes.
8. Validate that the SMART S-2422 reports to Plaspy by checking device activity in your Plaspy account and confirming live or recent location updates.

## Example Configuration Commands

The SMART S-2422 is typically configured using the Navtelekom NTC Configurator utility rather than raw SMS or terminal commands. Exact commands and menu items vary by firmware and the NTC Configurator version. When using the software, look for fields labeled Server, IP or Host, Port, and Transport and enter the Plaspy values d.plaspy.com or 54.85.159.138 and port 8888. If your deployment uses SMS commands or CLI provided by the manufacturer consult the official Navtelekom documentation for the exact syntax for setting server host, port, and transport.

## Configuration Notes

- Firmware versions and device revisions can change available menu names and configuration workflows. Confirm the exact steps for your firmware version.
- Choose UDP or TCP based on installer preference and mobile network reliability. Plaspy supports both and will detect the protocol automatically.
- Keep a copy of the saved NTC Configurator profile for faster deployment to additional devices.
- Verify APN and SIM data settings on the device if uploads do not begin after server configuration.
- If you use Bluetooth for local diagnostics, ensure the technician tool is compatible with the device firmware.

## Why Use Plaspy with This Configuration

Pairing the SMART S-2422 with Plaspy gives operations teams a consistent method to collect GNSS location, input events, and telemetry for fleet oversight. Using the shared Plaspy endpoint simplifies server configuration across large deployments since all devices use the same server address and port while Plaspy automatically detects the tracker protocol.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup and firmware guidance with Navtelekom at https://www.navtelecom.ru/
