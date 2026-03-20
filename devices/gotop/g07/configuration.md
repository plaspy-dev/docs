---
slug: /gotop/g07/configuration
id: g07-configuration
sidebar_label: Configuration
title: GOTOP - G07 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the GOTOP G07 tracker showing Plaspy server settings and practical setup steps for integration
keywords:
  - GOTOP G07 configuration
  - GOTOP G07 setup
  - GOTOP G07 server configuration
  - GOTOP G07 Plaspy setup
  - Plaspy GPS tracker configuration
  - GOTOP GPS tracker setup
  - vehicle tracking G07
  - asset tracker configuration
  - G07 tracking platform setup
  - Plaspy device integration
---

# GOTOP - G07 Configuration

This page covers the public configuration context for using the GOTOP G07 tracker with Plaspy. It explains the shared Plaspy server settings you will enter on the device or via your manufacturer tool, and the practical steps to confirm the G07 reports positions, alarms, and telemetry into Plaspy. The G07 is a rugged, long‑life asset tracker compatible with Plaspy for persistent location and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware revision, hardware revision, installation type, and vendor configuration tools. Use the details on this page to apply Plaspy server values and validate connectivity, then consult the GOTOP documentation or vendor tools for device‑specific options.

## Configuration Overview

This configuration process prepares the G07 to send GNSS, LBS and device telemetry to Plaspy so positions and alarms appear in the Plaspy platform for live mapping and historical playback. The key public server settings used by Plaspy are the same for all devices and should be entered on the tracker or in the GOTOP configuration tool.

- Enter the Plaspy server domain or IP so the G07 reports to the Plaspy backend d.plaspy.com or 54.85.159.138.
- Set the device to communicate on port 8888 which Plaspy uses for all supported devices.
- Select UDP or TCP transport when the tracker requires a transport choice.
- Save and apply the configuration, then restart the G07 if your tool or firmware requires it.
- Validate that the device appears and reports correctly in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com for device hostname configuration.
- Server IP 54.85.159.138 as an alternate endpoint to enter when required by the configuration tool.
- Port 8888 which Plaspy uses for all supported trackers.
- Transport support: configure UDP or TCP on port 8888 if the device requires a transport selection.
- Plaspy automatically detects the tracker protocol when the device reports to the shared server endpoint.

## Typical Requirements Before Setup

- Device power and battery readiness, or external power applied for configuration.
- Active Micro SIM with a data plan and correct APN details for 2G GSM reporting where required.
- A configuration method for the GOTOP G07 such as the manufacturer provided software, a serial console, or vendor programming tool.
- GSM coverage where the device will report from so the tracker can reach d.plaspy.com or 54.85.159.138.
- The Plaspy server settings (domain or IP and port 8888) available to enter into the device configuration.
- Access to a Plaspy account or platform view to validate the device is reporting after setup.

## How This Tracker Connects to Plaspy

When configured, the G07 sends GNSS positions, fallback LBS data and event telemetry over GSM to the Plaspy server endpoint and port. Plaspy receives those packets, automatically detects the tracker protocol, and forwards location and alarm data into the platform for real time visibility and historical playback.

- The G07 reports to the shared Plaspy endpoint d.plaspy.com or the IP 54.85.159.138.
- The device communicates on port 8888 which is used by Plaspy for all devices.
- Choose UDP or TCP on the device if the configuration requires a transport selection.
- Plaspy’s automatic protocol detection recognizes the tracker protocol and ingests position and alarm messages.
- Positions, tamper and movement alarms, battery status and other supported telemetry become visible in Plaspy for monitoring and incident response.

## Common Configuration Workflow

1. Access the official GOTOP G07 configuration method or software provided by your vendor or manufacturer.
2. In the server or reporting settings enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the report port to 8888 which Plaspy uses for all supported devices.
4. If the device requires selecting a transport, choose UDP or TCP on port 8888.
5. Enter any required APN and SIM related values so the device has active data connectivity.
6. Apply or save the configuration in the manufacturer tool and restart the tracker if the tool or firmware requires a reboot.
7. Validate that the device reports to Plaspy and appears in the platform with position and telemetry data.
8. If reporting does not appear, confirm firmware version, APN, signal strength, and that the correct server/port were saved.

## Example Configuration Commands

The exact commands and method to configure a GOTOP G07 depend on the manufacturer tool, firmware release, or installer interface you are using. Some vendors provide SMS commands, serial console strings, or a desktop configuration utility. Refer to the GOTOP configuration guide or your vendor tool for the precise command syntax to set the server domain, server IP, and port 8888 and to select UDP or TCP where required.

## Configuration Notes

- Prefer using the server domain d.plaspy.com so DNS resolves to the current Plaspy endpoint; the IP 54.85.159.138 is provided as an alternate for tools that require a numeric address.
- Plaspy uses port 8888 for all devices; configuring the G07 to that port is required for platform compatibility.
- Choose UDP or TCP according to the GOTOP tool or firmware option; behavior and reliability can vary by transport and network conditions.
- Firmware and hardware revisions can change configuration interfaces and available commands; always confirm the correct procedure for your device revision.
- Verify APN settings with the SIM provider and ensure the SIM has data connectivity before attempting to register the device with Plaspy.

## Why Use Plaspy with This Configuration

Using the GOTOP G07 with Plaspy provides a practical solution for organizations that need persistent location visibility, event alerts, and remote monitoring of high value mobile assets. The G07’s long battery options and rugged design make it well suited to long term deployments where infrequent checkins and reliable alarm reporting are essential.

To learn more about Plaspy and how to integrate compatible devices visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and manufacturer configuration tools consult the GOTOP website at https://www.gotop.cc/ as device setup methods and firmware behavior can change over time.
