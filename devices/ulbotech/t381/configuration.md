---
slug: /ulbotech/t381/configuration
id: t381-configuration
sidebar_label: Configuration
title: Ulbotech - T381 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for the Ulbotech T381 showing how to point the device to Plaspy using shared server settings and practical setup steps
keywords:
  - Ulbotech T381 configuration
  - Ulbotech T381 setup
  - T381 Plaspy configuration
  - Ulbotech GPS tracker setup
  - T381 server configuration
  - Plaspy compatibility T381
  - OBDII tracker configuration
  - vehicle tracker configuration Plaspy
  - T381 installation guide
  - Plaspy tracker setup
---

# Ulbotech - T381 Configuration

This page covers the public configuration context for using the Ulbotech T381 with the Plaspy platform. It summarizes the shared server settings Plaspy requires, outlines the common steps installers and administrators follow, and explains what you should verify on the device and in vendor tools before attempting to register the tracker with Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but manufacturer-side setup steps can vary depending on firmware revision, hardware variant, installation type, and the vendor configuration tool you use. Use this guide as a practical, Plaspy-focused reference and consult Ulbotech documentation for device-specific details.

## Configuration Overview

The goal of configuration is to prepare the T381 so it reliably reports GNSS position and OBDII telemetry to Plaspy, enabling live visibility and event reporting. Configuration typically means pointing the tracker to the Plaspy endpoint, confirming transport settings, and validating that data arrives in the platform.

- Point the device to the Plaspy server endpoint so telemetry is routed to your Plaspy account.
- Select the transport mode supported by the device and Plaspy (UDP or TCP) and set the correct port.
- Confirm cellular and GNSS readiness so the device can acquire position and send OBDII data.
- Save and apply settings, then validate that the device appears and reports in Plaspy.
- Use manufacturer tools or local configuration interfaces to adjust firmware options such as reporting intervals, immobilizer behavior, and Wi‑Fi hotspot settings where applicable.

## Plaspy Server Settings

Configure the T381 to report to the Plaspy server using the following public settings:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

When entering server details in the Ulbotech configuration tool, you can use either the domain d.plaspy.com or the IP 54.85.159.138 with port 8888. If the device requires you to choose a transport, select either UDP or TCP according to your installation preference; Plaspy will detect the device protocol automatically.

## Typical Requirements Before Setup

- Confirm the T381 is powered and properly seated in the vehicle OBDII port or otherwise installed per Ulbotech instructions.
- Ensure the device has a valid micro USIM with active data service and appropriate APN settings for your carrier.
- Access to the official Ulbotech configuration method or software (micro USB interface, vendor tool, or approved configuration app).
- A Plaspy account or administrator access to the Plaspy platform to verify device arrival and telemetry.
- A basic verification plan to confirm GNSS fix and initial OBDII data after configuration.
- Note the device firmware version so you can consult matching manufacturer setup notes if behavior differs.

## How This Tracker Connects to Plaspy

Once configured, the T381 sends GNSS position and OBDII telemetry to the Plaspy server endpoint and port. Plaspy receives that stream and correlates vehicle location, engine parameters, and event data for live monitoring and historical reporting.

- The tracker reports location and OBDII parameters to the shared Plaspy server endpoint d.plaspy.com (or 54.85.159.138) on port 8888.
- Plaspy automatically detects the tracker protocol so the platform can interpret messages without per-device protocol selection.
- Telemetry and event reports provide vehicle visibility, diagnostic alerts, and driver behavior events in the Plaspy dashboard.
- The T381’s Wi‑Fi hotspot or bridging features can reduce cellular usage for in-cab devices while the tracker itself maintains a connection to Plaspy.
- Remote commands sent from Plaspy (for supported functions such as immobilizer control) are routed back through the same server endpoint and port.

## Common Configuration Workflow

1. Access the official Ulbotech configuration method or vendor software for the T381 (micro USB interface, manufacturer tool, or approved setup app).
2. In the device network or server settings enter the Plaspy server as either d.plaspy.com or 54.85.159.138.
3. Set the server port to 8888 as required by Plaspy.
4. If the tracker requires a transport selection choose UDP or TCP on port 8888.
5. Apply or save the configuration in the Ulbotech tool and confirm there are no local errors.
6. Restart the device if the vendor instructions indicate a reboot is required for changes to take effect.
7. Validate that the device reports to Plaspy by checking your Plaspy account for the incoming device and recent position or telemetry messages.

## Example Configuration Commands

This model configuration reference does not include public command-line commands. Exact configuration commands and the method to send them depend on the Ulbotech configuration tool, firmware, or vendor SMS/USB procedures. Use the official Ulbotech configuration utility or documentation for command syntax and ordering when programmatic configuration is required.

If you have vendor-supplied command strings or factory configuration files, apply them in the order documented by Ulbotech and verify each step by confirming a successful connection to d.plaspy.com or 54.85.159.138 on port 8888.

## Configuration Notes

- Firmware versions and hardware variants can change available menu items and configuration parameters; always record the device firmware when troubleshooting.
- Choose UDP or TCP deliberately. UDP is common for low-overhead reporting while TCP may be used where guaranteed delivery is preferred; Plaspy will detect the protocol sent by the device.
- Installer practices vary by market and vehicle type; confirm that the OBDII connector orientation and power behavior match expectations before finalizing installation.
- Use the vendor tool for precise APN or network settings when a micro USIM requires a custom APN configuration.
- Retain a copy of configuration files or screenshots of settings to speed troubleshooting and replicate configurations across a fleet.

## Why Use Plaspy with This Configuration

Configuring the Ulbotech T381 to report to Plaspy gives fleet operators integrated visibility into vehicle location, engine diagnostics, and driver events from a single telematics endpoint. The combination of OBDII telemetry and GNSS position reporting with Plaspy provides a practical foundation for routing, maintenance workflows, fuel monitoring, and security features such as remote immobilization where supported.

To learn more about Plaspy and how it integrates with compatible trackers like the Ulbotech T381 visit https://www.plaspy.com. For device specific configuration details, firmware notes, and the latest vendor documentation verify the information at the Ulbotech website http://www.ulbotech.com/ as manufacturer details and setup methods can change over time.
