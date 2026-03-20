---
slug: /cantrack/gf30/configuration
id: gf30-configuration
sidebar_label: Configuration
title: CanTrack - GF30 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the CanTrack GF30 tracker with Plaspy server settings and practical setup workflow
keywords:
  - CanTrack GF30 configuration
  - CanTrack GF30 setup
  - GF30 server configuration
  - GF30 Plaspy setup
  - GF30 GPS tracker configuration
  - CanTrack tracker Plaspy
  - vehicle asset tracker GF30
  - GF30 installation guide
  - GF30 telemetry setup
  - Plaspy device configuration
---

# CanTrack - GF30 Configuration

This page covers the public configuration context for using the CanTrack GF30 magnet GPS tracker with Plaspy. It explains the shared server settings Plaspy requires, the typical prerequisites to confirm before setup, and practical workflow guidance to direct the GF30 to report location and event data into the Plaspy platform.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol when a device connects. Exact manufacturer-side setup steps can vary depending on GF30 firmware, hardware revision, installation type, and the vendor's configuration tools, so use the procedures below as a practical guide while also consulting the GF30 manufacturer documentation for device-specific details.

## Configuration Overview

Preparing a GF30 for Plaspy involves pointing the device at Plaspy's server endpoint, ensuring reliable cellular connectivity and power, and validating that the device reports correctly into the platform. The goal is to make the tracker visible in Plaspy dashboards for real-time monitoring, alerts, and historical tracks.

- Configure the GF30 to send its telemetry to the Plaspy server endpoint and port.
- Confirm SIM, network registration, and device power prior to finalizing settings.
- Choose the correct transport option (UDP or TCP) if the tracker firmware requires it.
- Apply and save configuration changes, then restart the tracker if the device requires a reboot.
- Validate connectivity and that position and alarm events appear within Plaspy.

## Plaspy Server Settings

Use the following public server settings when configuring the GF30 to report to Plaspy. All devices in Plaspy use the same port and the platform automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (the GF30 may be configured using either UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged GF30 device with an active battery and any required power connections.
- A working cellular SIM card installed and registered on the supported GSM bands for the GF30.
- Access to the official CanTrack configuration method or software for the GF30 (SMS commands, web tool, or vendor app depending on the device).
- A Plaspy account or the relevant Plaspy provisioning information so you can verify the device in the platform.
- A location with cellular coverage to allow the device to register and send telemetry.
- Basic familiarity with choosing UDP or TCP transport if the configuration interface requests a transport type.

## How This Tracker Connects to Plaspy

When configured, the GF30 sends periodic location updates and event reports to the Plaspy server endpoint and port. Plaspy receives those connections and maps incoming data into the platform, where it can be displayed on maps, used to trigger alerts, and stored as historical tracks.

- The GF30 is set to report to the shared Plaspy endpoint d.plaspy.com (or 54.85.159.138) on port 8888.
- The tracker can use UDP or TCP as the transport on port 8888 based on firmware or installer choice.
- Plaspy automatically detects the tracker protocol so devices can connect without manual protocol selection in the platform.
- Position updates, geo-fence and vibration alarms, low battery alerts, and other events are forwarded to Plaspy for dashboard visibility.
- If cellular connectivity is lost, the GF30 can retain data locally and forward stored records after reconnection.

## Common Configuration Workflow

1. Access the official CanTrack GF30 configuration method or software provided by the manufacturer or vendor.
2. In the device server settings, enter the Plaspy server address either as d.plaspy.com or as the IP 54.85.159.138.
3. Set the device server port to 8888.
4. Choose UDP or TCP transport if the GF30 configuration interface requires a transport selection.
5. Apply or save the configuration changes in the manufacturer tool.
6. Restart the GF30 if the manufacturer instructions indicate a reboot is required for changes to take effect.
7. Validate that the device reports to Plaspy by confirming the GF30 appears in your Plaspy dashboard and sends location or event updates.

## Example Configuration Commands

The GF30 can be configured using vendor-provided tools, SMS commands, or a configuration app depending on firmware and the vendor. Exact commands and syntax vary by firmware version and the vendor tool. Because configuration commands are manufacturer supplied, confirm the exact SMS or tool-based commands in the CanTrack GF30 manual.

If you are using SMS for configuration, the general approach is to send the configuration command string from a registered phone number to the GF30 and then check device response messages. Replace any placeholder values used by the manufacturer with your real settings when sending commands.

## Configuration Notes

- Firmware differences may change exact command syntax or the location of settings in a configuration tool; always check the GF30 manual for your firmware version.
- If you select TCP or UDP on the device, remember Plaspy supports both transports on port 8888; choose the transport best suited to your network and firmware behavior.
- Plaspy uses the same port for all supported devices and will automatically detect the protocol when the tracker connects, so you do not need a unique port per device.
- If the GF30 supports SMS configuration, that can be useful for remote installs where the configuration app is not available, but SMS command formats are vendor specific.
- Validate using live telemetry and event tests after configuration to ensure both location updates and alarm events reach Plaspy.

## Why Use Plaspy with This Configuration

Using the GF30 with Plaspy provides a straightforward path to get covert asset tracking, alarms, and telemetry into a single platform for monitoring and operational response. Organizations tracking trailers, containers, or other assets benefit from continuous position updates, event alerts, and stored tracks that help with recovery, security, and fleet oversight.

To learn more about Plaspy and how it can integrate GF30 devices into fleet and asset workflows, visit https://www.plaspy.com. For the most current device specific setup steps, firmware details, and command reference for the GF30, verify the manufacturer documentation at https://www.cantrackgps.com/ as setup methods and firmware behavior can change over time.
