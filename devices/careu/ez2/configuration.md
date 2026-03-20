---
slug: /careu/ez2/configuration
id: ez2-configuration
sidebar_label: Configuration
title: CAREU - EZ2 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the CAREU EZ2 GPS tracker to report to Plaspy using public server settings and practical setup guidance
keywords:
  - CAREU EZ2 configuration
  - CAREU EZ2 setup
  - EZ2 Plaspy configuration
  - Plaspy tracker configuration
  - EZ2 GPS tracker setup
  - CAREU tracker integration
  - vehicle tracker configuration
  - fleet GPS configuration
  - EZ2 server settings
  - CAN OBD II telemetry
---

# CAREU - EZ2 Configuration

This page describes the public configuration context for using the CAREU EZ2 GPS tracker with Plaspy. It summarizes the practical server settings and the common setup workflow you will use to point an EZ2 device at the Plaspy platform so that location, CAN/OBD II telemetry, and device events are delivered into Plaspy dashboards.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol at the platform edge. Manufacturer-side setup steps for the EZ2 can vary by firmware version, hardware revision, installation type, and vendor configuration tools; this guide focuses on the public Plaspy-side settings and general, practical configuration guidance backed by the EZ2 feature set such as 4G LTE Cat 1 connectivity with 2G fallback and U1Lite+ CAN/OBD II telemetry.

## Configuration Overview

The goal of configuring the CAREU EZ2 for Plaspy is to ensure the tracker can establish a stable data link to Plaspy's shared endpoint so position, vehicle diagnostics, and event data arrive reliably. Use the manufacturer configuration interface to point the EZ2 at the Plaspy server and validate connectivity and reporting.

- Configure the device network settings so the EZ2 sends data to Plaspy server domain or IP.
- Set the port and transport so the tracker can open a session to Plaspy on the standard ingestion port.
- Verify APN, SIM data plan, and cellular connectivity to enable LTE and 2G fallback reporting.
- Validate the device reports location and CAN/OBD II telemetry into Plaspy after configuration.
- Confirm immobilizer, geofence and accessory events are visible in Plaspy as required.

## Plaspy Server Settings

Use the following public Plaspy settings when configuring the CAREU EZ2. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol at the platform.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Active SIM card with a data plan and carrier service enabled for LTE and 2G fallback as needed.
- APN, username and password details from the mobile operator if required by the SIM profile.
- Physical device installation with power applied and access to the manufacturer configuration tool or SMS commands.
- Access to the CAREU configuration manual, web tool, or vendor portal to change server and transport settings.
- A Plaspy account or project where you can confirm the device has registered and is sending telemetry.
- Basic knowledge of whether your installation requires TCP or UDP transport for the tracker to connect.

## How This Tracker Connects to Plaspy

When configured, the CAREU EZ2 establishes an outgoing connection over cellular to the shared Plaspy ingestion endpoint and port. The tracker sends periodic position reports, CAN/OBD II telemetry and event messages that Plaspy parses and displays in the platform.

- The EZ2 is configured to report to the Plaspy server domain or IP and port 8888
- The tracker uses either UDP or TCP transport to send telemetry to Plaspy
- Plaspy inspects incoming connections and automatically detects the device protocol for correct parsing
- Location updates, diagnostic telemetry and geofence/immobilizer events are forwarded into Plaspy dashboards
- Onboard log uploads and replayed logs are sent to the same Plaspy endpoint so historical data is preserved

## Common Configuration Workflow

1. Access the official CAREU configuration method such as the web configuration tool, vendor utility, or documented SMS/command interface provided by the manufacturer.
2. Locate the server or APN settings section and enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 as an alternative.
3. Set the device port to 8888, noting that Plaspy uses the same port for all devices.
4. If the device requires a transport selection, choose UDP or TCP based on your installation or vendor recommendation.
5. Configure APN and SIM-related settings required for cellular connectivity and save or apply the changes.
6. Reboot or restart the EZ2 device if the manufacturer procedure requires it to apply network changes.
7. Validate that the device has registered with Plaspy and is reporting location and telemetry correctly in your Plaspy project.

## Example Configuration Commands

The CAREU EZ2 supports multiple manufacturer-side configuration methods and command syntaxes depending on firmware and tooling. Exact commands and SMS strings can vary by firmware release and are provided in CAREU documentation and vendor tools. Because no public configuration command set is provided here, use the CAREU configuration manual or installer tool to apply the following public Plaspy settings:

- server domain d.plaspy.com or server IP 54.85.159.138
- port 8888
- transport UDP or TCP

Refer to the official CAREU documentation for the exact command or SMS format required to set these values for your firmware version.

## Configuration Notes

- Firmware and hardware revisions may change the configuration menu names, command syntax, or SMS strings; always confirm your device firmware before applying settings.
- UDP and TCP behave differently with network equipment and NAT; test both transports if you encounter connectivity issues and consult the installer guide.
- Ensure APN settings match the SIM provider; incorrect APN entries are a common cause of failed telemetry uploads.
- Confirm that immobilizer, CAN/OBD II and accessory channels are mapped as expected in CAREU configuration so Plaspy receives the intended telemetry fields.
- All devices in Plaspy use the same port and the platform automatically detects protocol, so focus on correct server/transport and cellular connectivity on the device side.

## Why Use Plaspy with This Configuration

Configuring the CAREU EZ2 to report to Plaspy gives fleet managers and operations teams consolidated access to real-time location, vehicle diagnostics and event-driven controls such as immobilization and geofence alerts. The EZ2’s CAN/OBD II telemetry and accessory support combine with Plaspy’s platform capabilities to deliver actionable insights for fuel management, maintenance planning and security workflows.

To learn more about Plaspy and how it handles device ingestion and fleet visibility visit https://www.plaspy.com. For the most current CAREU EZ2 device-specific setup details, commands and firmware behavior refer to the manufacturer site https://www.systech-iot.com/ as vendor documentation may be updated over time.
