---
slug: /gotop/vt_390/configuration
id: vt_390-configuration
sidebar_label: Configuration
title: GOTOP - VT-390 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP VT-390 tracker integration with Plaspy including server settings workflow and setup notes
keywords:
  - GOTOP VT-390 configuration
  - GOTOP VT-390 setup
  - VT-390 server configuration
  - VT-390 Plaspy integration
  - GOTOP tracker Plaspy
  - VT-390 GPS tracker setup
  - vehicle tracking configuration
  - fleet management tracker setup
  - GPS tracker server settings
  - tracker configuration guide
---

# GOTOP - VT-390 Configuration

This page covers the public configuration context for using the GOTOP VT-390 tracker with Plaspy. It summarizes the practical server settings and recommended workflow you will need to point a VT-390 at the Plaspy platform so that the device can report location and events to your Plaspy account. This guidance focuses on public, platform-level settings rather than proprietary manufacturer internals.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use the details here to prepare the VT-390 for integration with Plaspy, and consult GOTOP documentation for device-specific controls and firmware instructions.

## Configuration Overview

The goal of the configuration process is to prepare a GOTOP VT-390 so it can reliably send position and event data to Plaspy and be visible in the Plaspy platform. The steps emphasize entering Plaspy server information, selecting transport if required, and validating reporting after the device is configured.

- Enter Plaspy server information so the tracker knows where to send telemetry.
- Choose the transport mode (UDP or TCP) if the tracker requires an explicit selection.
- Save and apply configuration using the official GOTOP configuration method.
- Restart or cycle power on the tracker if required by the firmware to activate new settings.
- Validate that the VT-390 appears and reports correctly in Plaspy.

## Plaspy Server Settings

Use the following public server settings when configuring the VT-390 to report to Plaspy:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered and accessible VT-390 unit with any required external antennas and vehicle wiring completed.
- An active cellular data connection where applicable (the VT-390 supports tracking via SMS or GPRS).
- Access to the official GOTOP configuration method or software supplied by the vendor for this model.
- The device IMEI or identifier available for registration and verification in your fleet records.
- Basic knowledge of whether your installation or firmware requires UDP or TCP selection for server transport.
- Permission to restart or cycle power on the vehicle tracker during installation.

## How This Tracker Connects to Plaspy

When configured to use Plaspy, the VT-390 sends location and event data to the shared Plaspy server endpoint and port so the platform can display and process incoming telemetry. Plaspy’s automatic protocol detection means you only need to provide the server endpoint and port; the platform will recognize the tracker protocol when the device connects.

- The VT-390 reports position and status updates to d.plaspy.com (or 54.85.159.138) on port 8888.
- You can configure the device to use UDP or TCP transport depending on what the firmware requires.
- Event reports such as movement, SOS, geo-fence, or sensor alerts are sent to the Plaspy endpoint for processing.
- Plaspy receives the device stream and maps the VT-390 to the appropriate account or fleet based on the device identifier.
- After configuration the platform provides visibility for location history and live monitoring.

## Common Configuration Workflow

1. Access the official GOTOP VT-390 configuration method or software as provided in the device documentation or by your vendor.
2. In the device server or reporting settings, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888 (this is the Plaspy standard port used across supported devices).
4. If the device requires a transport selection, choose UDP or TCP according to your installation or firmware preference.
5. Apply or save the configuration in the GOTOP tool or by the device configuration method.
6. Restart the VT-390 if required by the firmware to activate the new server settings.
7. Validate that the device reports to Plaspy by checking device connectivity and live location in your Plaspy account or through your fleet administrator tools.

## Example Configuration Commands

The VT-390 can be configured using the official GOTOP configuration tool, SMS commands, or vendor-provided software depending on firmware and region. Because manufacturer command formats and tools vary by firmware and local firmware builds, exact command strings are not included here. Use the GOTOP configuration interface to enter the Plaspy server values:

- Server: d.plaspy.com or 54.85.159.138
- Port: 8888
- Transport: UDP or TCP (if required)

If you have received SMS command documentation or a configuration script from GOTOP, apply those manufacturer-provided commands to set server and port values and then verify reporting to Plaspy. Always follow GOTOP's documented order when applying multiple commands.

## Configuration Notes

- Firmware variations and hardware revisions can change the location of server settings in the GOTOP tool or the SMS command syntax; consult the current GOTOP manual for exact procedures.
- Choose UDP or TCP according to your network and firmware guidance; Plaspy accepts both transports on port 8888 and will detect the protocol automatically.
- If you configure the VT-390 via SMS, be mindful of command order and any required device reboot after applying settings.
- The VT-390 supports tracking via SMS or GPRS, so ensure the SIM data plan and APN are configured correctly per GOTOP guidance before pointing to Plaspy.
- Plaspy uses the same port for all supported devices which simplifies multi-device deployments and reduces per-device port management.

## Why Use Plaspy with This Configuration

Using the GOTOP VT-390 with Plaspy provides a straightforward path to fleet visibility and event monitoring. By pointing the VT-390 to the shared Plaspy server endpoint and port, organizations can consolidate location data, alarms, and history into a single fleet management platform for better operational oversight.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest VT-390 commands, firmware notes, and manufacturer instructions verify device specific setup details at the GOTOP website https://www.gotop.cc/ since firmware behavior and manufacturer configuration methods can change over time.
