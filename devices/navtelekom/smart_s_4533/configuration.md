---
slug: /navtelekom/smart_s_4533/configuration
id: smart_s_4533-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-4533 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Navtelekom SMART S 4533 setup with Plaspy including server settings and practical setup workflow
keywords:
  - Navtelekom SMART S-4533 configuration
  - Navtelekom SMART S-4533 setup
  - SMART S-4533 Plaspy
  - Navtelekom GPS tracker configuration
  - SMART S-4533 server configuration
  - vehicle tracker Plaspy setup
  - SMART S-4533 dual SIM setup
  - Navtelekom tracker integration
  - SMART S-4533 telemetry setup
  - fleet tracking SMART S-4533
---

# Navtelekom - SMART S-4533 Configuration

This page describes the public configuration context for using the Navtelekom SMART S-4533 tracker with Plaspy. It focuses on the practical server settings and workflow needed to register the device to Plaspy so the tracker can reliably deliver GNSS positions, event signals, and peripheral telemetry to your Plaspy account.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while the exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and the Navtelekom configuration tools you use. Use the information here to prepare the SMART S-4533 for Plaspy and consult official Navtelekom documentation for device specific details.

## Configuration Overview

This section explains what you need to configure on the SMART S-4533 so it can send data to Plaspy and appear in your fleet dashboard. The goal is to point the tracker to Plaspy, select the correct transport, verify connectivity, and confirm the device reports as expected.

- Point the device to the Plaspy server using the shared server domain or IP and the Plaspy port.
- Choose transport UDP or TCP if the device requires an explicit transport selection.
- Save and apply the configuration so the tracker initiates sessions to Plaspy.
- Verify the tracker is reporting GNSS and event data to Plaspy and visible in the platform.
- Use Navtelekom tools or Bluetooth local configuration to manage device parameters and dual SIM settings where applicable.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- Access to the SMART S-4533 physical device and any on site wiring or power connections required for setup.
- An active cellular data SIM installed and working in the device if using cellular connectivity, with dual SIM redundancy available for higher uptime.
- Access to Navtelekom configuration tools or local Bluetooth configuration method to change server and transport settings.
- Charged backup battery or vehicle power present so the device can complete configuration and report to Plaspy.
- Documentation or firmware release notes from Navtelekom for the exact hardware revision you are configuring.
- Network connectivity on the cellular provider that permits outbound connections to the Plaspy server endpoint.

## How This Tracker Connects to Plaspy

The SMART S-4533 is configured to send GNSS positions, event notifications, and peripheral telemetry to the Plaspy server endpoint and port. Plaspy receives the incoming packets and associates them to devices using the tracker protocol, which Plaspy detects automatically.

- The tracker establishes an outbound session to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on the device settings and network conditions.
- Once connected, position updates and event messages are forwarded into Plaspy for live mapping, alerts, and reporting.
- Plaspy uses the shared port 8888 for all devices and automatically recognizes the specific tracker protocol.
- Confirmation of reporting is typically done by observing incoming telemetry on the Plaspy platform or by checking device-side connection status.

## Common Configuration Workflow

1. Access the official Navtelekom configuration method or software such as the NTC Configurator or Bluetooth local interface provided by the device.
2. Locate the GPRS or server settings section and enter the Plaspy server as either d.plaspy.com or 54.85.159.138.
3. Set the remote server port to 8888 which Plaspy uses for all devices.
4. If the device requires a transport selection, choose UDP or TCP based on your network preferences.
5. Apply or save the configuration through the manufacturer tool or local interface.
6. Restart the device if required by the Navtelekom procedure so changes take effect.
7. Validate that the SMART S-4533 reports to Plaspy by watching for incoming data in Plaspy or using any verification commands documented by Navtelekom.

## Example Configuration Commands

The SMART S-4533 supports configuration via Navtelekom supplied tools and local Bluetooth configuration. Exact command formats and SMS or serial commands depend on device firmware and the vendor configurator. Because Navtelekom provides multiple configuration paths, the precise commands can vary by firmware version and tool.

If you are using Navtelekom remote or local configuration tools, follow the tool instructions to set the server to d.plaspy.com or 54.85.159.138 and port 8888, and select UDP or TCP as required. For devices or firmware that accept textual or SMS style commands, refer to the official Navtelekom command list in their documentation for the correct syntax.

## Configuration Notes

- Firmware differences across hardware revisions can change the exact parameter names and available configuration methods; always check Navtelekom release notes.
- Choosing UDP typically reduces overhead while TCP can provide a more reliable session where networks permit; Plaspy will accept either on port 8888.
- Dual SIM behavior is vendor controlled; confirm SIM priority and failover settings in the Navtelekom configurator so the device maintains connectivity to Plaspy.
- Local Bluetooth configuration can simplify on site setup for parameters like the server and transport without removing the device from the vehicle.
- Keep a record of device IMEI and identifier in Plaspy so incoming data can be associated quickly during initial validation.

## Why Use Plaspy with This Configuration

Using the Navtelekom SMART S-4533 with Plaspy provides a straightforward path to continuous location visibility and event driven monitoring for fleet and industrial use cases. The S-4533’s dual SIM 4G connectivity, backup battery, and flexible interfaces make it well suited to maintain telemetry during challenging installation and network conditions, while Plaspy centralizes tracking, alerts, and reporting.

To learn more about Plaspy and how it handles device integration visit https://www.plaspy.com. For the most current device specific configuration instructions, firmware details, and command syntax consult the official Navtelekom documentation at https://www.navtelecom.ru/ since manufacturer methods and firmware behavior can change over time.
