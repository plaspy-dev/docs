---
slug: /gotop/d09/configuration
id: d09-configuration
sidebar_label: Configuration
title: GOTOP - D09 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for GOTOP D09 to connect with Plaspy including server settings and practical configuration steps
keywords:
  - GOTOP D09 configuration
  - GOTOP D09 setup
  - GOTOP D09 server configuration
  - GOTOP D09 Plaspy
  - GOTOP asset tracker
  - magnetic GPS tracker configuration
  - D09 battery options
  - asset GPS configuration
  - fleet tracking configuration
  - GPS tracker server settings
---

# GOTOP - D09 Configuration

This page covers the public configuration context for using the GOTOP D09 asset GPS tracker with Plaspy. It focuses on the Plaspy-side server settings and the practical steps you or your installer will take to prepare a D09 device for reliable reporting into the Plaspy platform. Use this guide for setup planning, verification, and to understand how the D09's capabilities map to Plaspy's ingestion model.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The D09 is a portable magnetic tracker offering multi-mode positioning (GPS, BDS, AGPS, WiFi and LBS), multiple battery capacities (D09A/B/C), 4G LTE and 2G cellular support, SMS parameter configuration, and event alarms — all of which can be configured to report into Plaspy for live tracking, alerts, and history playback.

## Configuration Overview

The objective of configuring a GOTOP D09 for Plaspy is to ensure the device reports location and event data to the shared Plaspy endpoint so assets are visible in the platform in real time and in history traces. Configuration generally involves pointing the D09 to Plaspy's server, selecting transport, saving parameters, and validating the first report in the Plaspy platform.

- Set the device reporting endpoint to Plaspy's server so GPS and alarm messages reach your Plaspy account.
- Choose the transport method (UDP or TCP) if the device requires it and ensure the port is set to Plaspy's standard port.
- Apply and save parameters on the D09 using the manufacturer configuration tool or SMS commands as supported.
- Validate connectivity by confirming the D09 appears in Plaspy and sends live location and telemetry updates.
- Use SMS fallback for quick location lookups and to provision parameters where direct tools are not available.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Plaspy will automatically detect the tracker protocol once the device reports to the shared Plaspy endpoint

Note: All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol to simplify multi-vendor deployments.

## Typical Requirements Before Setup

- A charged and operational GOTOP D09 unit with the desired battery option installed
- A valid cellular connection and active data-capable SIM compatible with the D09's network bands
- Access to the official GOTOP configuration method or vendor software and any SMS parameter commands the device supports
- The device IMEI or identifier needed to register or verify the tracker in your Plaspy account
- A Plaspy account or access to the Plaspy tenant where the device will be visible
- Basic tools for placement and testing such as a temporary mount, a phone for SMS provisioning, and a computer if the vendor tool is web or PC based

## How This Tracker Connects to Plaspy

When configured to the Plaspy endpoint, the D09 sends positioning and event messages to the shared Plaspy server and port so Plaspy can ingest, display, and alert on those messages. Plaspy's automatic protocol detection helps accept data from the D09 without manual protocol selection on the backend.

- The device is configured to report to d.plaspy.com (or the equivalent IP) on port 8888.
- The D09 can use UDP or TCP transport on port 8888 depending on the selection in the device settings.
- Location updates, movement and drop-off alarms, low battery notices, and other telemetry are forwarded to Plaspy for live map display and history.
- SMS location messages remain available as a fallback channel for immediate location lookups when needed.
- Plaspy's automatic protocol detection handles vendor protocol selection once the device begins reporting.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software (PC tool, web console, or SMS configuration) provided by the vendor.
2. In the device server settings enter d.plaspy.com or 54.85.159.138 as the reporting endpoint.
3. Set the reporting port to 8888 (this is the port Plaspy uses for all devices).
4. Choose UDP or TCP if the D09 requires a transport selection in its parameters.
5. Apply or save the configuration using the vendor tool or send the required SMS parameter commands to the device.
6. Restart or power-cycle the D09 if the manufacturer instructions indicate a reboot is required to activate new settings.
7. Validate that the device reports to Plaspy by checking for the first live location and event messages in your Plaspy account.

## Example Configuration Commands

The exact configuration commands and the method to send them vary by GOTOP firmware version and by whether you are using the vendor's PC/web tool or SMS parameter commands. GOTOP devices commonly support SMS-based parameter configuration and vendor tools will provide an interface to set server, port, transport, and reporting intervals. Because commands and syntax differ between firmware revisions, consult the GOTOP configuration manual supplied with your D09 for command syntax and examples.

If you prefer SMS provisioning, typical public workflow patterns include sending SMS parameter strings to the device IMEI number or device SIM number to set server and port values; these SMS strings are vendor specific. Refer to the official GOTOP documentation for the exact command format for your D09 firmware.

## Configuration Notes

- Firmware differences and vendor tool versions can change the exact parameter names and SMS command syntax; always verify the command set for your device firmware.
- TCP versus UDP: select the transport required by your installation or allowed by your network. Plaspy supports either on port 8888 and will auto-detect the protocol.
- SMS-based configuration is commonly supported on the D09 and can be useful for remote provisioning when direct tool access is not available.
- Keep the device battery charged during initial configuration and testing, especially for higher autonomy models like the D09C.
- Confirm cellular coverage on the deployment site because reliable reporting to d.plaspy.com requires an active data connection or SMS capability for fallback.

## Why Use Plaspy with This Configuration

Using the GOTOP D09 with Plaspy gives you a straightforward way to stream multi-mode positioning and alarm events into a centralized fleet and asset management platform. The D09's rugged form factor, magnetic mount, and battery options make it practical for covert asset protection, while Plaspy handles the ingestion, visualization, and alerting for live monitoring and historical trace analysis.

Learn more about Plaspy and how it works with devices like the GOTOP D09 at https://www.plaspy.com. For device-specific command syntax, firmware notes, and the latest configuration guidance from the manufacturer, verify the current documentation at https://www.gotop.cc/ as methods and firmware behavior can change over time.
