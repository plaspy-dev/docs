---
slug: /cantrack/tk100n/configuration
id: tk100n-configuration
sidebar_label: Configuration
title: CanTrack - TK100N Configuration
sidebar_class_name: menu_item_tracker
description: Practical setup guide for CanTrack TK100N with Plaspy including required server settings and step by step configuration
keywords:
  - CanTrack TK100N configuration
  - CanTrack TK100N setup
  - CanTrack TK100N Plaspy
  - TK100N server configuration
  - TK100N GT06N configuration
  - GPS tracker configuration
  - vehicle tracker setup
  - Plaspy server setup
  - fleet tracking configuration
  - TK100N GPRS setup
---

# CanTrack - TK100N Configuration

This page covers the public configuration context for using the CanTrack TK100N with Plaspy. It describes the practical server settings and setup workflow needed so the TK100N can report location, ACC and alarm events to the Plaspy platform. The guidance below focuses on the shared Plaspy endpoint and the typical manufacturer-side actions required to point a GT06N compatible device like the TK100N at the platform for live tracking and remote control.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on incoming connections so most GT06N devices can be onboarded without protocol-specific server entries. Manufacturer setup steps can vary by firmware version, hardware revision, installation method and the supplier tool used to configure the TK100N, so the instructions below are intended as practical, public guidance rather than a replacement for the device manual.

## Configuration Overview

Configuring the TK100N for Plaspy prepares the device to send position and event data to the Plaspy server, validates connectivity over the mobile network, and enables visibility inside the Plaspy dashboard. The TK100N is GT06N compatible and supports GPRS/TCP IP reporting with SMS fallback, which aligns with Plaspy's automated protocol parsing and server handling.

- Set the device server to Plaspy by using the domain or the provided IP and the shared Plaspy port so packets arrive at the correct endpoint.
- Configure the device transport option to UDP or TCP if the TK100N configuration tool requires a transport selection.
- Verify APN and mobile data connectivity so the tracker can reach Plaspy over GPRS.
- Validate reporting by checking that position and alarm messages are visible in Plaspy after the device is started.
- Keep the device firmware and configuration commands consistent with the manufacturer documentation to avoid unexpected behavior.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol on incoming connections

Plaspy uses the same port for all supported devices and the platform automatically detects the tracker protocol so you only need to point the TK100N at the Plaspy endpoint and port.

## Typical Requirements Before Setup

- A powered and correctly hard wired TK100N installed in the vehicle harness and accessible for configuration.
- A working 2G SIM card with data enabled and the correct APN configured for GPRS reporting.
- Access to the official CanTrack configuration method or software supplied by the vendor or installer for setting server, port, transport and protocol options.
- A Plaspy account or tracking instance ready to receive device reports and display telemetry.
- Basic tools for testing such as a temporary power supply, SMS-capable phone number for command fallback, or a configuration cable if required by the device.
- Knowledge of the device IMEI or unique identifier so the device can be matched in Plaspy after it reports.

## How This Tracker Connects to Plaspy

When configured, the TK100N sends location updates and event packets to the Plaspy endpoint using its GT06N-compatible message format over mobile data. Plaspy receives those packets on the shared port and automatically parses the protocol so device telemetry becomes visible in the platform.

- The tracker reports to the shared Plaspy server endpoint and port using the configured transport.
- Position and event messages such as ACC on/off, SOS, vibration and power loss are forwarded to Plaspy for alerting and logging.
- The device can use SMS as a fallback for configuration or critical alarms when GPRS is unavailable.
- Plaspy parses incoming GT06N formatted messages and maps telemetry into the dashboard and reporting tools.
- Remote commands issued via Plaspy or a configured server can be used for relay control or status requests if supported by the device and local regulations.

## Common Configuration Workflow

1. Access the official CanTrack configuration method or software provided by the manufacturer or vendor.
2. Locate the server setting and enter the server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the port to 8888, which Plaspy uses for all devices.
4. Choose UDP or TCP for transport if the device requires you to select one.
5. Select GT06N protocol on the device if a protocol option is available and not auto detected by the device firmware.
6. Save or apply the configuration and restart the device if the tool or firmware requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by confirming position and event messages appear in your Plaspy instance.

## Example Configuration Commands

The exact command syntax for the TK100N depends on the manufacturer firmware and the configuration interface you use. CanTrack devices commonly support SMS and serial/USB commands for server and APN configuration, but these commands vary by firmware version.

Because manufacturer commands can change and there are multiple vendor tools, consult the CanTrack TK100N manual or your supplier for the precise SMS or configuration tool commands to set server, port, APN and protocol. When using SMS commands, you will typically supply the Plaspy server domain or IP and port together with APN credentials where required.

## Configuration Notes

- Firmware differences and regional hardware variants can change available configuration options and command syntax; always confirm commands against the device documentation.
- If your configuration tool allows TCP and UDP, test both transport modes if connectivity is intermittent; Plaspy accepts either on port 8888.
- SMS fallback is useful for remote troubleshooting when GPRS is unavailable, but it is typically slower and may not carry full telemetry.
- Ensure the APN settings from your mobile operator are entered correctly when the device requires APN, username or password placeholders such as {{apn}} {{apnu}} or {{apnp}} may be present in tooling and should be replaced with operator values.
- Keep a record of the device IMEI and configuration applied for long term fleet management and troubleshooting.

## Why Use Plaspy with This Configuration

Using the CanTrack TK100N with Plaspy provides a practical path to reliable vehicle tracking, event alerting and remote control for fleet and security operations. The TK100N's GT06N compatibility and GPRS/TCP IP reporting work well with Plaspy's automated protocol parsing and unified server handling, enabling quick onboarding and consistent telemetry ingestion for monitoring, reporting and intervention tasks.

To learn more about Plaspy and supported workflows visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior and manufacturer details verify current information on the official CanTrack website https://www.cantrackgps.com/ before you deploy or change device settings.
