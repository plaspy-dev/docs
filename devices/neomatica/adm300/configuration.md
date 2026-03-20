---
slug: /neomatica/adm300/configuration
id: adm300-configuration
sidebar_label: Configuration
title: Neomatica - ADM300 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for Neomatica ADM300 to connect with Plaspy including required server settings and setup workflow
keywords:
  - Neomatica ADM300 configuration
  - Neomatica ADM300 setup
  - ADM300 Plaspy integration
  - Neomatica GPS tracker configuration
  - ADM300 server configuration
  - Plaspy tracker setup
  - ADM300 fleet tracking setup
  - ADM300 GPS platform setup
  - Neomatica tracker integration
  - ADM300 EGTS configuration
---

# Neomatica - ADM300 Configuration

This page provides public configuration context and practical guidance for using the Neomatica ADM300 GPS/GLONASS terminal with the Plaspy fleet management platform. It summarizes the server settings Plaspy requires, explains the typical workflow to point an ADM300 at Plaspy, and highlights prerequisites and operational checks based on the ADM300's GPRS and open protocol capabilities.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on its inbound connections. Exact manufacturer-side setup steps for the ADM300 can vary by firmware revision, hardware revision, installation type, and the vendor configuration tools you use; always verify device-specific procedures with Neomatica documentation.

## Configuration Overview

Configuring an ADM300 for Plaspy directs the device to send GPRS packet data to Plaspy’s shared server endpoint and port so the platform can process location, telemetry, and event data for live monitoring and historical reporting. The ADM300 supports EGTS and an open protocol, which makes it compatible with Plaspy when the device is pointed to the correct server and transport.

- Point the ADM300 to Plaspy using either the domain or the static server IP.
- Set the device network port to the shared Plaspy port so data arrives on the expected listener.
- Choose the transport method (UDP or TCP) if the device requires an explicit selection.
- Save and apply settings using the official Neomatica configuration method or vendor tool.
- Verify the device registers and begins reporting to Plaspy for live tracking and event visibility.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the ADM300:

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured using UDP or TCP on port 8888  
- Plaspy notes: all devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- Device power and correct wiring or battery condition so the ADM300 can boot reliably.  
- Active SIM card with a GPRS data plan provisioned for packet data use.  
- Access to the official Neomatica configuration method, software, or vendor tool used to change server and protocol settings.  
- Knowledge of Plaspy server settings (d.plaspy.com or 54.85.159.138 and port 8888) so you can enter them during configuration.  
- A test environment or monitoring console to validate that the device is reporting to Plaspy after changes.  
- Optional microSD card installed if you want extended onboard logging and batch upload of historical records.

## How This Tracker Connects to Plaspy

When correctly configured, the ADM300 sends location, telemetry, and event data over GPRS to Plaspy’s shared server endpoint and port. Plaspy receives and processes the incoming protocol (EGTS or the device's open protocol), making the unit visible in the platform for live mapping, alerts, and history.

- The ADM300 transmits position and telemetry packets to d.plaspy.com or 54.85.159.138 at port 8888.  
- Transport selection can be UDP or TCP; the device may require this setting to match the chosen connection type.  
- Plaspy automatically detects the tracker protocol so you do not need to preselect protocol detection in the platform.  
- Event reports, input states, and accelerometer-based movement events are forwarded to Plaspy for alerting and analytics.  
- Remote firmware update commands and management operations use the same GPRS link once the device is connected.

## Common Configuration Workflow

1. Access the official Neomatica configuration method or software recommended for the ADM300 (manufacturer tool, vendor utility, or authorized installer interface).  
2. In the device server settings, enter the Plaspy endpoint by domain or IP: d.plaspy.com or 54.85.159.138.  
3. Set the device port to 8888 (Plaspy uses the same port for all supported devices).  
4. If the ADM300 requires a transport selection, choose UDP or TCP according to your preference or installer guidance.  
5. Apply or save the configuration in the Neomatica tool and confirm the device accepted the new settings.  
6. Restart the device if required by the tool or firmware to activate the new network settings.  
7. Validate that the ADM300 reports to Plaspy by observing initial position/telemetry messages in your monitoring tools or by checking device connectivity status in Plaspy.

## Example Configuration Commands

The ADM300 supports configuration via Neomatica’s official utilities and vendor tools; exact commands or SMS phrases depend on the firmware and the configuration interface provided by Neomatica or your reseller. Because methods vary by firmware and vendor tools, consult the Neomatica configuration manual or the tool you are using for the precise command syntax to set server domain/IP, port 8888, and transport selection (UDP or TCP). When using a tool, you will typically enter:

- Server domain or IP: d.plaspy.com or 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP

If your configuration method uses placeholders for APN or credentials, preserve placeholders such as {{apn}}, {{apnu}}, or {{apnp}} and replace them with your mobile operator values when prompted by the manufacturer tool.

## Configuration Notes

- Firmware and tool differences: Neomatica firmware revisions and official configuration utilities can change command syntax and options; always reference the versioned Neomatica documentation.  
- Transport choice: TCP and UDP are both supported for the Plaspy endpoint; select the transport that matches your installer practices and network conditions. Plaspy will accept either and automatically detect the device protocol.  
- EGTS and open protocol: The ADM300 supports EGTS and an open protocol implementation; ensure the device protocol mode matches what your configuration tool is prepared to send to Plaspy.  
- Logging and microSD: If long-term route history is required, confirm microSD is formatted and accessible so the ADM300 can store and upload long route records as needed.  
- Manufacturer documentation: Refer to Neomatica’s official setup guides for device-specific instructions, safety notes, and firmware update procedures.

## Why Use Plaspy with This Configuration

Using the ADM300 with Plaspy gives fleet operators a straightforward path to real-time visibility, event-driven alerts, and historical route playback. The ADM300’s GPRS-based packet transfer and EGTS/open protocol compatibility allow it to integrate with Plaspy’s shared server endpoint quickly, enabling consistent reporting across mixed fleets and simplifying device lifecycle management with remote firmware support.

To learn more about Plaspy and platform capabilities, visit https://www.plaspy.com. For device-specific installation steps, firmware details, and the latest configuration commands for the ADM300, verify current information on the manufacturer site https://neomatica.com/.
