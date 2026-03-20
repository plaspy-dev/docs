---
slug: /gotop/vt_330/configuration
id: vt_330-configuration
sidebar_label: Configuration
title: GOTOP - VT-330 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the GOTOP VT-330 for Plaspy with server settings and practical setup steps for real time tracking
keywords:
  - GOTOP VT-330 configuration
  - GOTOP VT-330 setup
  - VT-330 Plaspy
  - VT-330 server configuration
  - GOTOP GPS tracker configuration
  - GOTOP VT-330 dual SIM setup
  - vehicle tracker configuration
  - fleet tracking setup
  - GPS tracker Plaspy integration
  - GOTOP VT-330 guide
---

# GOTOP - VT-330 Configuration

This page covers the public configuration context for using the GOTOP VT-330 GPS tracker with Plaspy. It summarizes the shared Plaspy server settings you will use, explains the practical steps most installers follow, and highlights the VT-330 features relevant to a Plaspy integration such as dual SIM GSM GPRS connectivity, SOS input reporting, basic telemetry and a built in backup battery.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary depending on firmware revision, hardware variant, installation type, and the vendor configuration tool you use. Use this guide as a practical reference for the common server values and workflow; verify manufacturer specific commands or menus against the official GOTOP documentation when needed.

## Configuration Overview

The goal of configuration is to prepare the VT-330 to communicate reliably with Plaspy so it can deliver position, events and basic telemetry for monitoring and reporting. Configuration primarily involves pointing the device at the Plaspy server, confirming transport settings, and validating that the unit appears in the platform.

- Set the device to report to the Plaspy server endpoint using the shared server details d.plaspy.com or 54.85.159.138 and port 8888.
- Choose UDP or TCP transport on the VT-330 if the device requires a transport selection; Plaspy supports both.
- Confirm dual SIM and GSM GPRS settings so the VT-330 maintains data connectivity to Plaspy for live tracking and SOS alerts.
- Save and apply changes in the manufacturer configuration tool or via the device SMS/console method, then validate the device is reporting to Plaspy.
- Use Plaspy to verify visibility, live location updates, and received event messages such as SOS or input state changes.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration option
- Plaspy automatically detects the tracker protocol so the same port is used for all supported devices

## Typical Requirements Before Setup

- A powered VT-330 unit with working GNSS reception and charged backup battery where applicable
- Active SIM card(s) with data plan inserted in the VT-330 dual SIM slots and mobile network coverage for GPRS
- Access to the GOTOP manufacturer configuration method or software for the VT-330 such as a PC tool, web interface, or documented SMS commands
- The device IMEI and any account details needed to register or identify the device in Plaspy
- A Plaspy account with permission to add or view devices so you can validate the tracker after configuration
- Basic vehicle wiring access if you will connect SOS, inputs, outputs or the immobilizer relay during installation

## How This Tracker Connects to Plaspy

When configured, the VT-330 uses GSM GPRS to send GNSS positions and event messages to the Plaspy server endpoint and port. Plaspy receives these updates and presents them for real time monitoring, alerts and historical playback.

- The VT-330 reports position and movement data over GSM GPRS to d.plaspy.com or 54.85.159.138 using port 8888
- Event messages such as SOS button presses and digital input state changes are forwarded to Plaspy for alerting and operator response
- Dual SIM capability helps maintain continuous connectivity by allowing the device to switch between carriers when available
- Plaspy processes incoming packets and automatically detects the tracker protocol so the device is recognized without per device port changes
- Outputs and the supplied immobilizer relay can be used with Plaspy workflows when wiring and platform permissions are configured

## Common Configuration Workflow

1. Access the official GOTOP VT-330 configuration method or software as provided in the device manual or vendor tools.
2. Insert and activate SIM card(s) with a working data plan and confirm network registration on the tracker.
3. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
4. Set the device port to 8888 in the server configuration.
5. Choose UDP or TCP if the VT-330 requires a transport selection for reporting.
6. Apply or save the configuration in the device tool and restart the VT-330 if required by the manufacturer or firmware.
7. Validate that the device reports to Plaspy by checking device visibility, a received location update, or a test event in the Plaspy platform.

## Example Configuration Commands

The VT-330 may be configured using manufacturer supplied software, a serial console, or SMS commands depending on firmware and regional tooling. Exact command syntax and supported methods vary by GOTOP firmware and distribution channel, so consult the official GOTOP manual for the definitive list of commands.

If you have vendor supplied SMS or console commands from GOTOP for setting server domain, IP and port those commands should be used exactly as provided by the manufacturer. Typical public style examples provided by vendors take forms such as setting server, port and APN parameters, but the precise text format differs by firmware version. Always use the official GOTOP documentation or configuration tool for accurate commands.

## Configuration Notes

- Plaspy uses the same port for all supported devices and automatically detects the tracker protocol so you do not need per device port changes for compatibility.
- TCP and UDP are both supported by Plaspy; choose the transport that matches your installation needs or the tracker firmware recommendations.
- Dual SIM behavior may vary with vendor firmware; verify how the VT-330 switches SIMs and that APN settings are correct for each carrier when using multi SIM setups.
- Firmware revisions and hardware variants can change configuration menus and command syntax; always check the GOTOP VT-330 manual for your specific device version.
- If you are using SMS based setup, be precise with command syntax and account for any default admin passwords documented by GOTOP.

## Why Use Plaspy with This Configuration

Using the GOTOP VT-330 with Plaspy gives organizations a practical way to collect continuous GNSS positions, basic vehicle telemetry, and event alerts like SOS and digital input changes. The VT-330 dual SIM resilience and compact form factor make it suitable for mixed vehicle fleets, motorcycles and small electric vehicles while Plaspy provides the centralized visibility and reporting needed for operational oversight.

To learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. For device specific commands, firmware notes and the most current VT-330 configuration details verify the GOTOP manufacturer documentation at https://www.gotop.cc/ which may include updated instructions and tools for your device version.
