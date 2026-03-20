---
slug: /gotop/d02/configuration
id: d02-configuration
sidebar_label: Configuration
title: GOTOP - D02 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for using the GOTOP D02 pet tracker with Plaspy server settings and setup workflow
keywords:
  - GOTOP D02 configuration
  - GOTOP D02 setup
  - GOTOP D02 Plaspy
  - GOTOP D02 server configuration
  - GOTOP D02 GPS tracker
  - GOTOP pet tracker configuration
  - GOTOP D02 tracking platform setup
  - GOTOP D02 GPRS 4G setup
  - GOTOP tracker configuration
  - GOTOP D02 integration Plaspy
---

# GOTOP - D02 Configuration

This page covers the public configuration context for using the GOTOP D02 pet tracker with Plaspy. It collects the practical, platform-specific server settings and an operational workflow so installers and administrators can prepare the D02 to report location and status to Plaspy. The D02 is a waterproof IP68 pet tracker with GPS, WiFi, LBS, BeiDou positioning, 4G LTE and GSM support, GPRS tracking, and SMS location features; those capabilities define how it can be integrated and validated against Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the central server endpoint and port are the only values you typically need to apply on the device side. Exact manufacturer-side setup steps for the GOTOP D02 can vary by firmware, hardware revision, installation, and the vendor configuration tool you use, so treat the guidance here as the public, practical steps for connecting the device to Plaspy.

## Configuration Overview

To integrate the GOTOP D02 with Plaspy you prepare the device to send its telemetry to Plaspy's shared server endpoint and verify that the device appears and reports correctly in the platform. The configuration process focuses on setting the server and transport, confirming mobile connectivity, and validating message delivery.

- Set the server endpoint and port on the D02 so it reports to Plaspy
- Choose the transport protocol (UDP or TCP) if required by the device interface
- Ensure the device has active mobile connectivity compatible with its 4G LTE or GSM bands
- Save and, if needed, restart the device so new settings take effect
- Verify connectivity and telemetry visibility inside Plaspy

## Plaspy Server Settings

Use these public Plaspy server settings when configuring the GOTOP D02. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

## Typical Requirements Before Setup

- A powered and charged GOTOP D02 ready for configuration and installation
- Active SIM card with mobile data compatible with the device network bands (4G LTE or GSM as supported)
- Access to the official GOTOP configuration method or software provided by the vendor
- Device identifier available (for example IMEI) to register or match the tracker in Plaspy
- Basic network visibility to confirm the tracker can reach external servers
- Administrative access to save or apply settings on the tracker and to restart the device if required

## How This Tracker Connects to Plaspy

The GOTOP D02 is configured to report location and device data to Plaspy's shared server endpoint and port so the platform can provide real time visibility and alerts. Plaspy's automatic protocol detection means the platform will interpret incoming messages from the tracker without requiring protocol selection on the server side.

- The D02 sends periodic location updates to the Plaspy server at d.plaspy.com or 54.85.159.138 on port 8888
- Transport can be UDP or TCP depending on the D02 configuration and installer preference
- Location, event, and alarm messages are delivered over the mobile data connection (GPRS/4G LTE)
- Plaspy receives and maps the device identifier to show the tracker in the fleet or device list
- After configuration, verify that real time tracking and alarms are visible in Plaspy

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software for the D02 (manufacturer app, web tool, or SMS commands as provided by GOTOP).
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP as the transport if the device requires a transport selection.
5. Apply or save the configuration in the device tool or send the configuration via the supported method.
6. Restart the D02 if required by the manufacturer process to activate the new server settings.
7. Validate that the device reports to Plaspy by confirming the tracker appears and sends updates on the Plaspy platform.

## Example Configuration Commands

The exact configuration commands and methods for the GOTOP D02 depend on the manufacturer tool, firmware version, and the vendor distribution method. GOTOP often supplies configuration via a vendor app, web portal, or SMS commands; consult GOTOP documentation for the precise commands and syntax. Because manufacturer commands may vary, follow the official GOTOP configuration guide that accompanies your device.

If you are using an SMS based setup or text commands supplied by GOTOP, keep placeholders provided by the manufacturer such as APN values or credentials intact (for example [apn], [apnu], or [apnp]) and replace them with your network operator settings when instructed.

## Configuration Notes

- Firmware and hardware revisions can change the exact menu labels, command syntax, or available transport options; check GOTOP documentation for your device revision.
- If you have a choice between UDP and TCP, test both in your deployment since network conditions and firewall rules can change reliability and latency.
- Keep the device IMEI or unique identifier on hand when registering or verifying the device in Plaspy.
- SMS based configuration is common for many GOTOP devices but the availability and syntax of SMS commands depend on the shipped firmware.
- Always save or apply settings and restart the device when required to ensure the server changes take effect.

## Why Use Plaspy with This Configuration

Configuring the GOTOP D02 to report to Plaspy gives organizations and pet owners centralized visibility into location, events, and device conditions. Using Plaspy's shared server endpoint and automatic protocol detection simplifies setup across many devices because you only need to apply a single server address and port to start transmitting telemetry to the platform.

To learn more about Plaspy and how it can manage devices like the GOTOP D02, visit https://www.plaspy.com. For the most current device specific commands, firmware notes, and configuration tools, verify details on the manufacturer site at https://www.gotop.cc/ since setup methods and firmware behavior can change over time.
