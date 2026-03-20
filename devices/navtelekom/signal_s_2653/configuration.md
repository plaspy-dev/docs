---
slug: /navtelekom/signal_s_2653/configuration
id: signal_s_2653-configuration
sidebar_label: Configuration
title: Navtelekom - SIGNAL S-2653 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Navtelekom SIGNAL S-2653 with Plaspy server settings and practical setup steps for fleet telematics
keywords:
  - Navtelekom SIGNAL S-2653 configuration
  - SIGNAL S-2653 setup
  - Navtelekom tracker Plaspy
  - Plaspy tracker configuration
  - GPS tracker setup
  - vehicle tracker configuration
  - fleet management tracker setup
  - SIGNAL S-2653 server settings
  - tracker protocol detection
  - tracker integration Plaspy
---

# Navtelekom - SIGNAL S-2653 Configuration

This page covers the public configuration context for using the Navtelekom SIGNAL S-2653 with Plaspy. It explains the practical server settings and the typical steps needed to point the device at Plaspy so the unit can transmit position and telemetry to the platform. Information here is intended for installers and technical operators preparing the S-2653 for Plaspy integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The SIGNAL S-2653 includes features relevant to setup such as external GNSS antennas, a dual SIM 2G modem, SD logging, and the NTC Configurator for configuration, and those features inform common commissioning workflows described below.

## Configuration Overview

Configuring the SIGNAL S-2653 for Plaspy prepares the tracker to send location and telemetry reliably to the platform and ensures it is visible in fleet dashboards. The goal is to apply the Plaspy server endpoint and transport settings, confirm connectivity and reporting, and verify fallback logging behavior.

- Point the tracker to the Plaspy server endpoint and correct port so messages route to your Plaspy account.
- Choose the transport (UDP or TCP) if the device configuration requires a transport selection.
- Validate cellular connectivity and SIM readiness so the unit can establish data sessions.
- Save and apply configuration, then confirm the device is reporting to Plaspy and visible in platform dashboards.
- Verify SD card logging and backup battery behavior as a fallback for intermittent connectivity.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

These values are the public Plaspy endpoint details required when configuring the tracker to report to the Plaspy platform.

## Typical Requirements Before Setup

- Access to the official manufacturer configuration tool or method such as the NTC Configurator mentioned in Navtelekom documentation.
- A powered and installed SIGNAL S-2653 with external GNSS and GSM antennas connected as required by the installation.
- Active cellular SIM(s) installed and able to register on the device's supported 2G network bands.
- A desktop or mobile connection to the device setup interface (local Bluetooth or manufacturer tool) per Navtelekom instructions.
- Availability of current firmware and the manufacturer technical documentation for the exact hardware revision being configured.
- Means to monitor the device after commissioning to validate reporting into Plaspy.

## How This Tracker Connects to Plaspy

The SIGNAL S-2653 is configured to send position and telemetry messages over its cellular link to the shared Plaspy endpoint and port. Once the tracker is pointed at the Plaspy server and the transport is set, messages are received by Plaspy and the platform handles protocol detection and parsing.

- Device sends periodic or event-driven position messages to d.plaspy.com or 54.85.159.138 on port 8888.
- The tracker can use UDP or TCP transport depending on configuration; Plaspy accepts both.
- Plaspy automatically detects and interprets the tracker protocol so no per-device protocol selection is required on the server side.
- Event messages and telemetry from inputs, CAN, or onboard sensors are forwarded to Plaspy for dashboarding and alerts.
- SD logging and the internal backup battery provide a local fallback and data that can be synced when connectivity is restored.

## Common Configuration Workflow

1. Access the official Navtelekom configuration method or software (for example the NTC Configurator or authorized field tool).
2. Open the server settings section and enter the Plaspy server address either as domain d.plaspy.com or as IP 54.85.159.138.
3. Set the server port to 8888 as required by Plaspy.
4. If the device UI requires a transport choice, select UDP or TCP based on site preferences; the device may be configured to use either on port 8888.
5. Apply or save the configuration changes in the manufacturer tool and confirm the settings were written to the device.
6. Restart or power cycle the tracker if the manufacturer instructions require a reboot to apply network settings.
7. Validate that the tracker reports to Plaspy by checking device visibility and recent messages in the Plaspy platform and confirming telemetry appears.

## Example Configuration Commands

The exact commands and syntax for configuring the SIGNAL S-2653 depend on the manufacturer tool, firmware version, and whether configuration is performed via Bluetooth, USB, or a central configurator. Because Navtelekom provides an NTC Configurator and manufacturer documentation, follow the official tool steps to set the server and transport.

If you use an SMS or text-command method provided by Navtelekom in your firmware version, convert the server domain or IP and port into the command format required by the device. Maintain placeholders where required (for example APN placeholders) and consult manufacturer documentation for precise command syntax.

## Configuration Notes

- Firmware differences and hardware revisions can change configuration menus and command syntax; always confirm steps against the device firmware revision recorded in Navtelekom documentation.
- Dual SIM behavior may affect which SIM is used for uplink; verify SIM priority and roaming settings when commissioning devices for Plaspy.
- Choosing TCP versus UDP can depend on network reliability and operator behavior; Plaspy accepts both transports on the same shared port.
- Because Plaspy automatically detects the tracker protocol, focus on correct server domain/IP and port settings; protocol selection is typically handled by the platform.
- If using SMS-based configuration tools from Navtelekom, keep commands and placeholders intact and validate the device acknowledges settings before final deployment.

## Why Use Plaspy with This Configuration

Using the SIGNAL S-2653 with Plaspy gives fleet operators real-time visibility and the ability to combine GNSS position, vehicle bus telemetry, and event-driven reporting in a single platform. The device’s logging and backup power features help preserve critical event data during outages while the dual SIM cellular link supports redundancy in mixed network environments.

To learn more about using Plaspy with compatible trackers and to view platform capabilities visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and technical specifications verify details with the manufacturer at https://www.navtelecom.ru/.
