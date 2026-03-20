---
slug: /wp/vt_300/configuration
id: vt_300-configuration
sidebar_label: Configuration
title: WP - VT-300 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for WP VT 300 to connect to Plaspy using shared server settings and practical setup steps
keywords:
  - WP VT 300 configuration
  - WP VT 300 setup
  - VT 300 Plaspy
  - vehicle tracker configuration
  - GPS tracker setup Plaspy
  - WP VT 300 server configuration
  - tracking software configuration
  - fleet GPS integration
  - VT 300 network settings
  - tracker protocol detection
---

# WP - VT-300 Configuration

This page provides public configuration context for using the WP VT-300 GPS tracker with Plaspy. It documents the shared server settings that Plaspy requires, describes the typical setup workflow, and highlights practical considerations for making the VT-300 visible and operational on the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps for the VT-300 can vary by firmware version, hardware revision, installation type, and the configuration tool you use. The WP VT-300 supports multiple communication methods including voice, CS data, SMS, GPRS UDP/TCP on 2G networks, and 3G options such as Edge, UMTS, and HSDPA, and it supports OTA firmware updates and user defined interface expansion.

## Configuration Overview

The goal of the configuration process is to point the VT-300 at Plaspy so the device can report location and status reliably and be visible in the platform. Configuration prepares the tracker for network communication, ensures the correct transport and server endpoint are used, and validates that messages arrive at Plaspy.

- Configure the tracker to report to the Plaspy server endpoint and port so location packets reach the platform.
- Select the device transport mode UDP or TCP when required by the VT-300 configuration interface.
- Verify cellular connectivity and data service so GPRS or 3G reporting can function.
- Apply and save manufacturer configuration settings and restart the device if instructed.
- Confirm reporting by validating the device appears in Plaspy and is sending regular updates.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered WP VT-300 unit installed or accessible for configuration.
- An active SIM card with a data plan if you will use GPRS or 3G reporting.
- Access to the official manufacturer configuration method such as the vendor software, SMS commands, or OTA configuration tool.
- Basic knowledge of choosing UDP or TCP depending on your network and installer preference.
- A reliable cellular network signal at the installation location for data uplink.
- Credentials or access to any manufacturer portal or configuration application needed to save settings.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the VT-300 sends its location and event messages to Plaspy's shared server endpoint and port so the platform can ingest, decode, and display device data. Plaspy handles protocol detection so the server can accept common tracker message formats from the VT-300 over the configured transport.

- The device is set to report to d.plaspy.com or 54.85.159.138 using port 8888.
- Choose UDP or TCP transport on the VT-300 if the configuration requires explicit selection.
- The VT-300 sends periodic position and event packets according to its configured reporting logic.
- Plaspy automatically detects the tracker protocol and processes incoming messages for display in the platform.
- Successful configuration provides near real time visibility, event alerts, and operational monitoring in Plaspy.

## Common Configuration Workflow

1. Access the official WP VT-300 configuration method supplied by the manufacturer such as vendor software, SMS command set, or OTA configuration interface.
2. Enter the Plaspy server address using either the domain d.plaspy.com or the server IP 54.85.159.138 in the server host field.
3. Set the device server port to 8888 to match Plaspy requirements.
4. Choose the transport mode UDP or TCP if the VT-300 configuration requires an explicit choice.
5. Apply or save the configuration using the manufacturer's tool or command sequence.
6. Restart the VT-300 if the configuration tool or firmware requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by checking for incoming position updates and status messages in the Plaspy platform.

## Example Configuration Commands

The VT-300 supports multiple configuration mechanisms and the exact commands or menu steps depend on the manufacturer tool and firmware version. Because manufacturer SMS commands, serial commands, and vendor software interfaces vary by release, consult the WP configuration guide provided with the device for the exact syntax and any placeholders you must fill.

If you use SMS based configuration, typical workflows will include replacing placeholders such as {{apn}} with your carrier APN values or providing credentials where required. When the manufacturer provides example commands, follow their exact order and syntax and preserve placeholders.

## Configuration Notes

- Firmware and hardware revisions can change the exact configuration menu names and required command syntax. Verify firmware notes before applying settings.
- TCP and UDP behave differently on cellular networks. Use UDP for lower overhead reporting and TCP when guaranteed delivery and session behavior are preferred.
- The VT-300 supports OTA configuration and firmware upgrades where supported by the vendor. OTA can simplify mass deployment but check compatibility before mass updating.
- SMS configuration is commonly available as a fallback on devices that support it. Use SMS commands only if you understand the command format and any placeholders.
- Note the VT-300 has a user defined interface UDI for expansion. Use manufacturer guidance when adding or modifying external interfaces that affect reporting.

## Why Use Plaspy with This Configuration

Using the WP VT-300 with Plaspy gives organizations a straightforward way to consolidate vehicle tracking data into a single platform that accepts common tracker protocols. The VT-300's flexible communication options combined with Plaspy's shared server endpoint and automatic protocol detection make it easier to deploy the device and begin receiving location and event data without per device server customization.

To learn more about Plaspy and how it supports trackers like the WP VT-300 visit https://www.plaspy.com. Because device specific configuration steps, firmware behavior, and manufacturer documentation can change over time, verify the most current setup details and command syntax with the manufacturer at http://www.wondeproud.com/ before deployment.
