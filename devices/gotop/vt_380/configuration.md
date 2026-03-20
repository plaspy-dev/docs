---
slug: /gotop/vt_380/configuration
id: vt_380-configuration
sidebar_label: Configuration
title: GOTOP - VT-380 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for GOTOP VT-380 tracker setup with Plaspy including server settings and setup workflow
keywords:
  - GOTOP VT-380 configuration
  - GOTOP VT-380 setup
  - GOTOP VT-380 server configuration
  - GOTOP VT-380 Plaspy
  - VT-380 configuration
  - VT-380 setup guide
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet tracking configuration
  - Plaspy device configuration
---

# GOTOP - VT-380 Configuration

This page documents the public configuration context for using the GOTOP VT-380 tracker with Plaspy. It explains the shared server settings that Plaspy expects, the practical setup workflow, and the common preconditions you should verify before integrating a VT-380 device into Plaspy for real-time tracking and historical uploads.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol for incoming connections. Manufacturer-side configuration steps for the VT-380 can vary by firmware, hardware revision, installation type, and vendor tools, so this page focuses on the public, platform-side settings and practical guidance for applying them to your device.

## Configuration Overview

The goal of configuration is to point the VT-380 at Plaspy's server endpoint and confirm reliable data flow so telemetry, alerts, and logged waypoints are visible in the Plaspy platform. Because Plaspy uses a single port for all devices and handles protocol detection automatically, configuration is typically limited to server host, port, transport selection (if required), and saving the device settings in the tracker.

- Configure the VT-380 to report to Plaspy's server endpoint so location and alarm events reach the platform.
- Choose the transport protocol (UDP or TCP) if the device requires explicit selection.
- Set the server host to Plaspy and the configured port to ensure packets are routed to the correct endpoint.
- Validate connectivity and confirm that stored waypoints are uploaded after reconnection for complete history.
- Save and apply changes on the VT-380 and restart the device when instructed by the manufacturer tool.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP supported by the device
- Plaspy automatically detects the tracker protocol for incoming connections

Note that all devices in Plaspy use the same port and that Plaspy's automatic protocol detection reduces the need for protocol-specific configuration on many trackers.

## Typical Requirements Before Setup

- A powered and operational VT-380 with antennas connected and installed per the manufacturer instructions.
- A valid cellular SIM with data enabled and GPRS service active for TCP/UDP reporting (SMS can be used as a fallback depending on device capability).
- Access to the official GOTOP configuration tool or the device's SMS/serial configuration method as provided by the manufacturer.
- The VT-380 device IMEI or identifier recorded so it can be matched to a vehicle record in Plaspy.
- An active Plaspy account or deployment where you can add and monitor the device once it reports.
- Basic network visibility to verify that the device can reach d.plaspy.com or 54.85.159.138 on port 8888 from the cellular network.

## How This Tracker Connects to Plaspy

The VT-380 sends location, alarm, and sensor telemetry to Plaspy over GPRS using TCP or UDP. When GPRS is unavailable, the device caches waypoints and automatically uploads stored data once connectivity resumes. Plaspy ingests those packets and maps them to vehicle records for live tracking and historical reports.

- The VT-380 is configured to report to the Plaspy server endpoint d.plaspy.com (or 54.85.159.138) on port 8888.
- Device telemetry and alarm packets are transmitted over TCP or UDP depending on your transport selection.
- When connection is interrupted, the VT-380 uploads stored waypoints to Plaspy after reconnection to preserve route history.
- Plaspy automatically detects the tracker protocol and processes incoming packets for mapping, alerts, and reports.
- Alarm events such as SOS, geo-fence, power-cut, and movement are forwarded into Plaspy for notification and logging.

## Common Configuration Workflow

1. Access the official GOTOP VT-380 configuration method or software provided by GOTOP or your vendor (SMS commands, desktop tool, or web interface depending on your unit).
2. In the tracker server settings, enter the Plaspy server host as d.plaspy.com or use the IP 54.85.159.138 if your configuration tool requires an IP.
3. Set the server port to 8888 (all devices in Plaspy use the same port).
4. Choose UDP or TCP as the transport if the VT-380 requires an explicit transport selection.
5. Apply or save the configuration in the device tool and confirm that changes were accepted.
6. Restart the VT-380 if the manufacturer instructions indicate a reboot is required to activate new network settings.
7. Validate that the device reports to Plaspy by checking device connectivity and telemetry in your Plaspy deployment.

## Example Configuration Commands

The VT-380 supports multiple configuration approaches depending on firmware and vendor tools (SMS commands, serial/USB tools, or a desktop utility). The exact commands and syntax vary by firmware version and the manufacturer-provided tool, so consult the official GOTOP configuration documentation for precise command strings. Because model-specific public commands were not provided here, rely on the GOTOP manual or configuration utility to enter the Plaspy server host (d.plaspy.com or 54.85.159.138), port 8888, and transport selection.

## Configuration Notes

- Firmware differences across VT-380 units may change exact command syntax or menu locations; always verify the firmware version and corresponding GOTOP documentation.
- Where available, prefer GPRS TCP/UDP reporting for real-time telemetry and use SMS only as a fallback for configuration or emergency messaging.
- Choosing UDP can reduce overhead for high-frequency reporting, while TCP may improve delivery reliability depending on network conditions.
- The VT-380's internal flash logging preserves waypoints during connectivity loss and uploads them to Plaspy after reconnection; verify logging and upload behavior in your device settings.
- Keep a copy of any SMS command templates or configuration exports you use so you can reproduce settings across multiple devices.

## Why Use Plaspy with This Configuration

Using the GOTOP VT-380 with Plaspy provides a practical path to centralized fleet visibility, combining robust GNSS positioning and resilient GSM communications with Plaspy's dashboards, alerts, and reporting. Configuring the VT-380 to report to Plaspy's shared server endpoint and port ensures that location, alarms, and stored waypoints are available for dispatch, compliance, and incident response workflows.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For the latest device-specific setup commands, firmware notes, and configuration tools for the VT-380, verify current information on the manufacturer's website https://www.gotop.cc/ since setup methods and firmware behavior can change over time.
