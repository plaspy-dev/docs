---
slug: /cantrack/tk100b/configuration
id: tk100b-configuration
sidebar_label: Configuration
title: CanTrack - TK100B Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for CanTrack TK100B configuration with Plaspy server settings and practical integration steps
keywords:
  - CanTrack TK100B configuration
  - TK100B setup
  - CanTrack configuration
  - Plaspy tracker configuration
  - GPS tracker setup
  - vehicle tracking configuration
  - TK100B server settings
  - fleet tracking setup
  - GPS platform integration
  - CanTrack Plaspy compatibility
---

# CanTrack - TK100B Configuration

This page documents the public configuration context for using the CanTrack TK100B Accurate Pro with Plaspy. It focuses on the practical server and setup details needed to point a TK100B tracker at Plaspy so the device can deliver real time location and telemetry over GSM GPRS using TCP IP. Use this guide to understand the shared Plaspy settings and the typical steps installers and administrators follow to integrate the tracker with the platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol so device side configuration is usually limited to server address, port, transport selection, and any network APN settings required by the installed SIM. Exact manufacturer side steps and interfaces can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Always cross reference this public guidance with the official CanTrack documentation and the device configuration tool you have on hand.

## Configuration Overview

The goal of this configuration process is to prepare the TK100B to communicate reliably with Plaspy, validate connectivity, and enable visibility and control inside the Plaspy platform. Once configured, the tracker will report location, ignition and accessory states, SOS events, and support remote commands like engine cut or restore via the device relay as described in the CanTrack feature set.

- Configure the device network settings so it can reach the Plaspy server endpoint.
- Verify APN and SIM data connectivity so the TK100B can send TCP IP telemetry over GSM GPRS.
- Point the tracker at Plaspy using the shared server address and unified port used by all Plaspy integrations.
- Validate that the device appears in Plaspy and sends periodic position updates and event reports.
- Confirm anti theft controls and SOS reporting are visible in the platform and operate as expected.

## Plaspy Server Settings

When configuring TK100B devices for Plaspy, use the following public server settings exactly as shown. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol at connect time.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Device is installed and powered according to CanTrack installation guidelines and within the supported vehicle voltage range.
- Active cellular SIM with a data plan provisioned for GPRS TCP IP usage and an APN configured if required by the mobile operator.
- Access to the official CanTrack configuration method or software used for the TK100B such as the manufacturer's configuration tool, SMS commands, or wired configuration interface depending on the unit.
- Device IMEI or unique identifier noted for registration and lookup in Plaspy.
- Basic knowledge of whether the device requires TCP or UDP selection for outgoing telemetry, though Plaspy will detect protocol automatically once connected.
- Qualified installer or technician available to perform wiring checks for ignition sensing, relay control, and accessory connections if those features are required.

## How This Tracker Connects to Plaspy

The TK100B transmits location and telemetry data to Plaspy over GSM GPRS using TCP IP or UDP depending on configuration. The unit is set to report to Plaspy's shared server endpoint and port so incoming connections are routed into the platform where they are parsed and surfaced in dashboards, alerts, and remote command workflows.

- Tracker is configured with Plaspy server settings d.plaspy.com or 54.85.159.138 and port 8888.
- Device sends periodic position updates and event reports via TCP IP or UDP over GPRS.
- Plaspy ingests telemetry and exposes real time tracking, history playback, and alerting.
- SOS, geo fence, ignition events and relay actions reported by the device are forwarded into Plaspy for notification and control workflows.
- Plaspy detects the device protocol automatically on connection so manual protocol registration is not required on the platform side.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software for the TK100B as provided by the vendor or installer documentation.
2. If required by the device tool, enter the Plaspy server address using either d.plaspy.com or the server IP 54.85.159.138.
3. Set the server port to 8888 which is the port Plaspy uses for all supported devices.
4. Choose the transport type UDP or TCP if the configuration interface requires selecting a transport.
5. Configure APN and SIM related network settings on the device if your mobile operator requires them.
6. Apply or save the configuration and restart the device if the tool indicates a reboot is necessary.
7. Validate that the TK100B reports to Plaspy by checking that the device appears in the platform and sends initial telemetry and position updates.

## Example Configuration Commands

Exact commands and the method to send them vary by manufacturer tool and firmware. The TK100B is commonly configured using the CanTrack configuration software, SMS command strings, or a wired configuration interface depending on the unit and installed firmware. Because commands are vendor specific and may vary with firmware, consult the CanTrack documentation or your local supplier for the precise command syntax and recommended order.

If you are using SMS based setup for other CanTrack models as a reference, these vendors typically publish SMS templates for setting server and port values. For TK100B please refer to the official CanTrack command list provided with your device or available from CanTrack technical resources.

## Configuration Notes

- Firmware versions and regional variants can change the available command set and configuration UI; always check the device firmware release notes when troubleshooting.
- TCP versus UDP selection can affect delivery behavior in poor networks; Plaspy supports both and will auto detect the protocol used by the device.
- Ensure the SIM has working mobile data and the correct APN is configured; missing or incorrect APN is the most common cause of failed TCP IP connections.
- Record the device IMEI and map it in Plaspy after the device successfully connects so you can identify and manage the asset.
- For features such as relay based engine cut or two way voice, verify wiring and permissions during installation and confirm the events are logged in Plaspy after setup.

## Why Use Plaspy with This Configuration

Using the CanTrack TK100B with Plaspy gives organizations a practical path to centralized vehicle visibility, reliable event alerting, and remote control workflows. The TK100B's telemetry for ignition, SOS, geo fences, and accessory signals integrates into Plaspy to support operational monitoring, incident response, and fleet control tasks that improve security and efficiency.

To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and official command references consult the manufacturer at https://www.cantrackgps.com/ since setup methods and firmware behavior can change over time.
