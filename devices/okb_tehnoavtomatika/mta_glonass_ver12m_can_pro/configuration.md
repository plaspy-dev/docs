---
slug: /okb_tehnoavtomatika/mta_glonass_ver12m_can_pro/configuration
id: mta_glonass_ver12m_can_pro-configuration
sidebar_label: Configuration
title: OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN-PRO) Configuration
sidebar_class_name: menu_item_tracker
description: Configure MTA-Glonass ver 12M CAN PRO for use with Plaspy using public server settings and practical setup guidance
keywords:
  - OKB Tehnoavtomatika MTA-Glonass configuration
  - MTA-Glonass setup Plaspy
  - OKB Tehnoavtomatika tracker configuration
  - Plaspy tracker setup
  - MTA-Glonass server configuration
  - vehicle tracker CAN configuration
  - GNSS tracker setup
  - fleet management tracker setup
  - GPS tracker Plaspy compatibility
  - MTA-Glonass telemetry configuration
---

# OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN-PRO) Configuration

This page documents the public configuration context for using the OKB Tehnoavtomatika MTA-Glonass (ver.12M-CAN-PRO) tracker with Plaspy. It focuses on the practical server settings and workflow needed to prepare the device for sending GNSS position and telemetry to Plaspy. The guidance below is based on public Plaspy integration facts and the general capabilities of the MTA-Glonass family such as GPRS DATA, SMS fallback, CAN bus telemetry, and I O support for sensors.

Plaspy uses shared, platform level server settings and automatically detects the tracker protocol when a device connects. Manufacturer side setup steps and exact menu names, SMS commands, or configuration utilities can vary by firmware version, hardware revision, installation type, and vendor tools. Use this page as a practical reference for the public Plaspy settings and workflow, and verify device specific details with OKB Tehnoavtomatika documentation when needed.

## Configuration Overview

The objective of this configuration is to point the MTA-Glonass device to Plaspy and validate that the terminal can send location and CAN derived telemetry to the platform. The steps are commonly performed via the official OKB Tehnoavtomatika configuration tool, SMS commands, or an in‑field installer interface depending on the device firmware and installer preferences.

- Configure the device to report to the Plaspy server endpoint using the shared Plaspy port.
- Choose the appropriate transport protocol (UDP or TCP) if the device requires a transport selection.
- Verify GPRS or DATA channel connectivity so position and CAN telemetry reach Plaspy.
- Save and apply settings on the device and, if required, restart to begin reporting.
- Confirm the device appears in Plaspy and that position, CAN parameters and events are visible.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP may be used on port 8888 depending on device settings  
- Plaspy automatically detects the tracker protocol when the device connects  
- Note that all devices in Plaspy use the same port so set port 8888 on the tracker

## Typical Requirements Before Setup

- Access to the official OKB Tehnoavtomatika configuration method or installer software for this model.  
- A powered and installed MTA-Glonass unit with required wiring and CAN bus connections completed.  
- An active SIM card with GPRS or DATA channel enabled where cellular telemetry is required.  
- Confirmation of current device firmware and any vendor specific SMS command sets or config file formats.  
- Local installer access to save, apply, and optionally reboot the device after changes.  
- Access to Plaspy account or platform to validate device visibility after configuration.

## How This Tracker Connects to Plaspy

When configured, the MTA-Glonass sends GNSS position fixes and vehicle telemetry to the shared Plaspy endpoint and port. Plaspy ingests the uplink traffic and maps protocol messages into location updates, event logs, and CAN derived parameters for display and reporting.

- The terminal reports position and telemetry to d.plaspy.com or 54.85.159.138 using port 8888.  
- Transport can be either UDP or TCP on port 8888 as configured on the device.  
- Plaspy automatically detects the device protocol so explicit protocol selection on the platform side is not required.  
- Uplink data typically includes GNSS fixes and CAN bus telemetry that Plaspy converts to vehicle data fields.  
- Event buffering on the device ensures stored records are forwarded to Plaspy when connectivity resumes.

## Common Configuration Workflow

1. Access the official OKB Tehnoavtomatika configuration method or software for the MTA-Glonass model.  
2. In the device network or server settings, enter the Plaspy server address using either d.plaspy.com or 54.85.159.138.  
3. Set the server port to 8888 which is the shared Plaspy port used by all supported devices.  
4. If the device requires a transport selection, choose UDP or TCP depending on installer preference and network considerations.  
5. Apply or save the configuration changes in the device tool or send the configuration SMS if supported.  
6. Restart or power cycle the device if recommended by the manufacturer to activate new settings.  
7. Validate that the device reports to Plaspy by checking visibility, recent position updates, and telemetry in the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and SMS syntax vary by firmware and vendor tools for OKB Tehnoavtomatika devices. Because model specific commands are provided by the manufacturer or in device manuals, the precise command set is not reproduced here. Use the official OKB Tehnoavtomatika configuration utility or refer to the device manual for SMS or binary configuration command examples.

If you have manufacturer provided SMS commands or a configuration file for this model, apply the public Plaspy server values exactly as shown in the Plaspy Server Settings section above using that tool.

## Configuration Notes

- Firmware differences can change menu names and SMS command syntax. Always confirm the commands for the installed firmware revision.  
- Choosing UDP versus TCP may affect delivery behavior and retransmission. Select the transport that matches your network reliability and installer preference.  
- Because Plaspy uses a shared port and automatic protocol detection, the main task is ensuring the device points to d.plaspy.com or 54.85.159.138 on port 8888.  
- If the MTA-Glonass is configured by SMS, confirm that the SMS command includes the correct domain or IP and the port parameter in the exact order required by the device.  
- Verify CAN bus mappings and any required parameter IDs in the OKB Tehnoavtomatika configuration so Plaspy receives the expected telemetry channels.

## Why Use Plaspy with This Configuration

Integrating the MTA-Glonass (ver.12M-CAN-PRO) with Plaspy provides a streamlined path for getting GNSS position and CAN derived telemetry into a single fleet management platform. Plaspy’s automatic protocol detection and shared port approach reduces per device platform configuration, allowing installers to focus on accurate device setup and reliable network connectivity.

To learn more about Plaspy and platform features visit https://www.plaspy.com. Note that manufacturer specifications, setup methods, and firmware behavior can change over time so verify the latest device specific configuration details and command sets with OKB Tehnoavtomatika at http://www.okb-ta.ru/
