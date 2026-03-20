---
slug: /falcom/fox_in/configuration
id: fox_in-configuration
sidebar_label: Configuration
title: Falcom - FOX-IN Configuration
sidebar_class_name: menu_item_tracker
description: Public guide for configuring the Falcom FOX-IN to report to Plaspy using shared server settings for tracking and monitoring
keywords:
  - Falcom FOX-IN configuration
  - Falcom FOX-IN setup
  - FOX-IN Plaspy setup
  - Falcom tracker configuration guide
  - FOX-IN server configuration
  - Falcom GPS tracker configuration
  - FOX-IN tracking software configuration
  - vehicle tracking setup Falcom
  - Falcom FOX-IN GPS platform setup
  - Plaspy tracker integration
---

# Falcom - FOX-IN Configuration

This page covers the public configuration context for using the Falcom FOX-IN tracker with Plaspy. It describes the shared server settings you need to enter at the device or in the official Falcom configuration tools so the FOX-IN can send its location and status updates to the Plaspy platform.

Plaspy uses a single shared endpoint and port across supported devices and automatically detects the tracker protocol. Exact manufacturer side steps for configuring the FOX-IN can vary by firmware version, hardware revision, installation type, and the configuration tool used by the installer, so follow these public server settings while consulting Falcom documentation or your installer for device specific steps.

## Configuration Overview

This guide focuses on the practical steps required to prepare a FOX-IN device so it can communicate reliably with Plaspy for fleet monitoring, alerts, and historical logging. The goal is to make the device visible in Plaspy with consistent reporting and to validate connectivity.

- Point the FOX-IN to the Plaspy server endpoint so telemetry is routed to your Plaspy account.
- Choose the appropriate transport protocol (UDP or TCP) if the device requires a selection.
- Configure the device to use the shared Plaspy port so reports are accepted by the platform.
- Save and apply the settings using the official Falcom configuration method or installer tool.
- Verify the device reports position and status updates into Plaspy after a restart or reconnection.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be used depending on device requirements
- Plaspy automatically detects the tracker protocol so the same port is used for all supported devices

## Typical Requirements Before Setup

- Access to the official Falcom configuration software, web interface, or SMS command list for the FOX-IN
- A powered and operational FOX-IN device with current firmware appropriate for your deployment
- If the device communicates over cellular, a working SIM card with data or SMS capability and a valid mobile plan
- Physical access or remote management access to the device to apply settings and restart if required
- Credentials or installation permissions required by Falcom tools or the installer
- A Plaspy account or administrator access to confirm the device appears and reports in the platform

## How This Tracker Connects to Plaspy

The FOX-IN sends location updates, status reports, and alerts to the Plaspy endpoint so fleet managers can monitor vehicles and receive event notifications. Configure the device to target Plaspy using the domain name or the IP and the shared port to ensure consistent delivery.

- The device is configured to report to the Plaspy server endpoint d.plaspy.com or to IP 54.85.159.138
- Reports are sent over port 8888 which Plaspy uses for all supported devices
- You can select UDP or TCP on the device when transport selection is required
- Plaspy performs automatic protocol detection so it accepts compatible tracker protocols on the shared port
- Once connected, position and alert messages are visible in Plaspy for monitoring and historical logging

## Common Configuration Workflow

1. Access the official Falcom configuration method or software for the FOX-IN (manufacturer tool, web interface, or approved installer utility).
2. Enter the Plaspy server domain d.plaspy.com or alternatively enter the server IP 54.85.159.138 as the target endpoint.
3. Set the device port to 8888 to match Plaspy server settings.
4. Choose UDP or TCP if the FOX-IN requires a transport selection; either is supported by Plaspy.
5. Apply or save the configuration using the Falcom tool or command method.
6. Restart the device if required by the manufacturer procedure to activate the new settings.
7. Validate that the device reports to Plaspy by checking for incoming data in your Plaspy account or platform view.

## Example Configuration Commands

The exact command syntax and configuration tool vary by Falcom firmware and the configuration channel you use (software, web UI, or SMS). Because Falcom provides multiple configuration methods for the FOX-IN, follow the official Falcom command list or the configuration interface you have, and use the Plaspy settings above when entering server information.

If you are using Falcom SMS commands or a text based interface, replace the server and port placeholders with:
- Server domain or IP: d.plaspy.com or 54.85.159.138
- Port: 8888
- Transport: UDP or TCP as required by your device interface

Consult Falcom documentation for exact SMS syntax or the configuration utility for precise command formatting.

## Configuration Notes

- Firmware differences can change the available configuration options and command syntax; always confirm the FOX-IN firmware version before applying settings.
- Choosing UDP vs TCP can depend on reliability needs and local network behavior; Plaspy accepts either and will detect the protocol automatically on port 8888.
- The FOX-IN supports sending messages via TCP and SMS according to the device description; use the method supported by your installation and carrier.
- Use the domain d.plaspy.com where possible so DNS updates are handled centrally; the IP 54.85.159.138 is provided as an alternative endpoint.
- Keep a record of applied settings and any SMS commands sent in case a rollback or reconfiguration is needed.

## Why Use Plaspy with This Configuration

Configuring the Falcom FOX-IN to report to Plaspy gives organizations consistent visibility over vehicles and assets through a centralized platform. With the FOX-IN's reporting capabilities and Plaspy's automatic protocol detection and shared server port, fleets can simplify setup and reduce per-device configuration complexity.

To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. For device specific methods, firmware behavior, and the latest FOX-IN configuration details verify information on the manufacturer site https://www.falcom.de.
