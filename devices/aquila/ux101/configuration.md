---
slug: /aquila/ux101/configuration
id: ux101-configuration
sidebar_label: Configuration
title: Aquila - UX101 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Aquila UX101 showing Plaspy server settings and practical setup steps for platform visibility
keywords:
  - Aquila UX101 configuration
  - Aquila UX101 setup
  - Aquila UX101 server configuration
  - Aquila GPS tracker Plaspy
  - UX101 Plaspy setup
  - Aquila vehicle tracker configuration
  - UX101 GPS platform setup
  - tracker configuration guide
  - fleet management tracker setup
  - Plaspy tracker configuration
---

# Aquila - UX101 Configuration

This page covers the public configuration context required to connect the Aquila UX101 tracker to Plaspy. It explains the shared Plaspy server settings and the practical steps you or an installer will use to prepare the device for reporting to the Plaspy platform. The guidance here uses only public configuration details and is intended to help you integrate the UX101 into Plaspy for fleet tracking and operational visibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol during first contact. Exact manufacturer-side configuration steps can vary by firmware version, hardware revision, installation type, and vendor toolset, so treat this as a practical public guide rather than a substitute for the official device manual.

## Configuration Overview

The configuration process prepares the UX101 to send its telemetry to the Plaspy server so the device appears and updates reliably inside the Plaspy platform. The following points summarize the practical purpose of the setup process and what to verify during installation.

- Point the UX101 to the Plaspy server endpoint so it can establish a data connection for location and event reporting.
- Configure the transport and port so the device can deliver packets to Plaspy reliably.
- Validate cellular and antenna connectivity for consistent GPS and GSM reception.
- Apply and save changes, then confirm the device is visible and sending data to Plaspy.
- Verify reporting behavior for typical events such as movement, ignition changes, and periodic location updates.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public Plaspy settings to use when configuring the UX101 for Plaspy. Plaspy uses the same port for all supported devices and relies on automatic protocol detection to identify the device protocol.

## Typical Requirements Before Setup

- Confirm the UX101 has power and is mounted or connected for initial configuration and testing.
- Ensure an active GSM SIM with data is installed and allowed for device outbound connections if the device uses cellular transport.
- Access to the official Aquila configuration method or software as provided by the manufacturer or vendor.
- A clear view or test location to validate GPS lock and GSM signal strength, especially for hidden or stealth installations.
- Credentials or access rights needed to change device network settings and save configuration.
- A way to monitor incoming connections on Plaspy or to request support from your Plaspy administrator to confirm device visibility.

## How This Tracker Connects to Plaspy

When configured, the UX101 will send location and device data to the shared Plaspy server endpoint and port so the device is visible in the Plaspy platform. Plaspy will accept the connection on the shared port and automatically determine the protocol used by the tracker.

- The tracker initiates a connection to d.plaspy.com or directly to 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on the device configuration and installer preference.
- Once connected, Plaspy detects the device protocol automatically and begins decoding telemetry.
- The UX101 reports regular location updates and event messages to enable tracking and monitoring in Plaspy.
- Confirming the device registers in Plaspy completes the basic connectivity verification step.

## Common Configuration Workflow

1. Access the official Aquila UX101 configuration method or software provided by the manufacturer or your vendor.
2. In the device network or server settings, enter d.plaspy.com or 54.85.159.138 as the server address.
3. Set the server port to 8888.
4. Choose UDP or TCP if the UX101 requires selecting a transport protocol.
5. Save or apply the configuration changes in the manufacturer tool.
6. Restart the device if the configuration tool or firmware requires a reboot for changes to take effect.
7. Validate that the device is reporting to Plaspy by checking device status in the platform or requesting confirmation from your Plaspy administrator.

## Example Configuration Commands

The exact commands or SMS strings for the UX101 depend on the manufacturer firmware and the configuration tools you use. Aquila devices commonly offer configuration through vendor software, serial connection, or SMS commands provided by the vendor. Because manufacturer-specific command sets vary, follow the official Aquila instructions for sending server address and port parameters.

If you have a manufacturer command list from Aquila or your vendor, apply the same public values shown on this page:
- Server d.plaspy.com or 54.85.159.138
- Port 8888
- Transport UDP or TCP

For SMS or console commands that include placeholders, preserve placeholders such as [apn], [apnu], or [apnp] and substitute them with your SIM operator values when performing configuration.

## Configuration Notes

- Firmware differences and hardware revisions can change the exact menu names and command syntax used to set the server address and transport.
- If given the choice, UDP and TCP both work with Plaspy. Choose based on your reliability needs and the behavior of the device firmware in your environment.
- Plaspy uses the same port 8888 for all supported devices and relies on automatic protocol detection, so use the public server values above.
- For hidden installations, verify antenna placement and GSM signal before final installation to avoid intermittent connectivity.
- Keep a copy of the manufacturer configuration steps on hand and verify any command syntax against the official Aquila documentation.

## Why Use Plaspy with This Configuration

Configuring the Aquila UX101 to report to Plaspy gives organizations a straightforward way to centralize vehicle location, status, and event data into a single fleet platform. Using the shared Plaspy endpoint and port simplifies deployment because the platform automatically identifies the device protocol and begins decoding telemetry without per-device server differences.

To learn more about Plaspy and how it manages device connections and fleet visibility, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and installation guidance for the Aquila UX101 verify details with the manufacturer at https://www.itriangle.in/.
