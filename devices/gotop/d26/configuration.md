---
slug: /gotop/d26/configuration
id: d26-configuration
sidebar_label: Configuration
title: GOTOP - D26 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect the GOTOP D26 solar tracker with Plaspy using shared server settings and automatic protocol detection
keywords:
  - GOTOP D26 configuration
  - GOTOP D26 setup
  - GOTOP D26 Plaspy
  - GPS tracker configuration
  - Plaspy server configuration
  - D26 GPS setup
  - fleet tracking configuration
  - solar GPS tracker setup
  - asset tracker configuration
  - tracker server settings
---

# GOTOP - D26 Configuration

This page documents the public configuration context for using the GOTOP D26 tracker with the Plaspy fleet management platform. It summarizes the Plaspy server settings you must apply on the device or in the vendor configuration tool and explains the practical steps to prepare a D26 for visibility and reporting on Plaspy. This guide is intended as a technical companion to the D26 product description and manufacturer documentation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once the device is pointed at the Plaspy endpoint. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so use this guide together with GOTOP documentation for device-specific procedures.

## Configuration Overview

The purpose of configuring a GOTOP D26 for Plaspy is to ensure the tracker reliably opens a connection to Plaspy’s server and sends GNSS fixes, telemetry, and alarms so the device appears in the Plaspy platform. Configuration focuses on network parameters, transport selection, and validating that the device can deliver both real-time and buffered data to the shared Plaspy endpoint.

- Point the D26 to the Plaspy server domain or IP and the shared Plaspy port so the device can initiate uploads.
- Choose the transport (UDP or TCP) required by your device firmware or deployment policy.
- Confirm cellular connectivity, SIM/APN provisioning, and sufficient power for reliable reporting.
- Apply and save settings on the D26 and restart the device if the firmware requires it to open the server connection.
- Verify the device registers and sends data to Plaspy so it becomes visible on maps and in alerts.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888 depending on device requirements
- Plaspy automatically detects the tracker protocol once the device connects

## Typical Requirements Before Setup

- A powered and accessible GOTOP D26 unit with sufficient battery or solar charge for configuration and testing.
- A valid cellular SIM provisioned for data (4G or GPRS as required by the device) and any required APN settings configured.
- Access to the official GOTOP configuration method such as the manufacturer web tool, configuration app, SMS commands, or vendor software.
- The Plaspy server settings (d.plaspy.com or 54.85.159.138 and port 8888) available to enter into the device or vendor tool.
- A Plaspy account or administrator contact to confirm the device appears on the platform during validation.
- A suitable test area with cellular coverage so the D26 can establish a connection and transmit data.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the D26 uses its cellular link to initiate a connection to the shared Plaspy server endpoint and port and transmits GNSS fixes, telemetry, and alarm events. Plaspy receives the incoming traffic and maps the device, processes events, and stores telemetry for live monitoring and historical playback.

- The D26 is configured to report to the Plaspy server endpoint d.plaspy.com or IP 54.85.159.138 on port 8888.
- The device uses either UDP or TCP transport on port 8888 depending on the selection made during configuration.
- Real-time location updates and alarm events (for example vibration, geofence, or SOS) are sent to Plaspy for immediate processing.
- Offline buffered data stored in the D26 is uploaded to Plaspy once cellular connectivity is available.
- Plaspy’s automatic protocol detection identifies the tracker protocol so the same Plaspy port can be used across supported devices.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or vendor software for the D26 (web tool, configuration app, or SMS command set).
2. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 according to the device interface.
3. Set the server port to 8888 as required by Plaspy.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Apply or save the configuration changes within the GOTOP tool or device interface.
6. Restart the D26 if the device firmware requires a power cycle to open the new server connection.
7. Validate that the device reports to Plaspy by confirming visibility on the platform and checking for incoming telemetry and events.

## Example Configuration Commands

The exact configuration commands and method vary by GOTOP firmware and vendor tools. Some D26 deployments are configured using the GOTOP configuration app or web interface, while others accept SMS commands or serial/USB provisioning. Because model-specific command sets differ, consult the GOTOP configuration manual for command syntax and examples relevant to your firmware revision.

When entering server settings, use:
- Server domain: d.plaspy.com
- Or server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP as required

If your device or vendor tool supports command-line or SMS-based configuration, follow the official GOTOP examples for setting server, port, transport, and APN parameters.

## Configuration Notes

- Firmware differences and hardware revisions can change how server, port, and transport are entered; always confirm the exact input format in the GOTOP manual for your firmware.
- Plaspy uses the same port 8888 for all supported devices and automatically detects the tracker protocol, so do not change the port unless instructed by Plaspy support.
- TCP vs UDP choice may affect reliability in lossy networks; select the transport supported and recommended by your firmware and carrier.
- If the D26 uses a cellular SIM, ensure APN and authentication values are set correctly in the GOTOP configuration tool so the device can establish a data session.
- Use the device’s offline buffer and supplementary transmission settings to preserve data during coverage gaps and review those settings during initial validation.

## Why Use Plaspy with This Configuration

Pairing the GOTOP D26 with Plaspy gives operators centralized visibility for remote assets that benefit from long-term outdoor operation and solar charging. The D26’s rugged design, GNSS performance, and offline buffering combined with Plaspy’s live maps, alerts, and telematics provide reliable situational awareness for containers, trailers, machinery, and other field assets.

Learn more about Plaspy and how it can support your D26 deployment at https://www.plaspy.com. For the latest GOTOP D26 device-specific configuration methods, firmware notes, and manufacturer guidance, verify details with the official GOTOP documentation at https://www.gotop.cc/. Device configuration steps and firmware behavior can change over time, so confirm the most current instructions with the manufacturer.
