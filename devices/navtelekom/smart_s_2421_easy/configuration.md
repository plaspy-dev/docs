---
slug: /navtelekom/smart_s_2421_easy/configuration
id: smart_s_2421_easy-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2421 EASY+ Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Navtelekom SMART S 2421 EASY plus setup with Plaspy server settings and practical setup workflow
keywords:
  - Navtelekom SMART S-2421 EASY+ configuration
  - Navtelekom SMART S-2421 EASY+ setup
  - Navtelekom tracker configuration
  - SMART S-2421 EASY+ Plaspy
  - GPS tracker server configuration
  - Plaspy server settings
  - vehicle tracking setup
  - fleet management tracker setup
  - NTC Configurator setup
  - GPS platform integration
---

# Navtelekom - SMART S-2421 EASY+ Configuration

This page covers the public configuration context for using the Navtelekom SMART S-2421 EASY+ tracker with the Plaspy platform. It collects the practical server settings and workflow guidance needed to point the device at Plaspy for real time tracking and telemetry ingestion while leveraging the manufacturer's configuration tools.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, so the server endpoint and port listed on this page are the same values used for all compatible trackers in Plaspy. Manufacturer-side configuration steps can vary by firmware version, hardware revision, installation type, and the vendor tools you use, so follow the device Passport and NTC Configurator guidance alongside this document.

## Configuration Overview

Configuring the SMART S-2421 EASY+ for Plaspy is about pointing the device to the Plaspy server endpoint, selecting the transport if required, saving the settings in the manufacturer tool, and validating that the device reports to Plaspy. The device supports vehicle telematics, accelerometer events, and sensor I/O which Plaspy ingests once the connection is established.

- Set the device server address to Plaspy and confirm the transport mode so the tracker can open a channel to the platform.
- Configure and confirm the device reporting interval and I/O mappings using the manufacturer NTC Configurator or equivalent tool.
- Verify SIM and cellular connectivity when applicable and ensure the device has power and a healthy battery backup state.
- Apply the saved configuration, restart the device if required, and confirm the device appears in Plaspy alive and sending data.

## Plaspy Server Settings

When configuring SMART S-2421 EASY+ for use with Plaspy, use the following public server settings:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming connections and all devices in Plaspy use the same port

Use either the domain or the IP when entering the server value in the manufacturer's configurator, depending on the tool and network environment.

## Typical Requirements Before Setup

- A powered SMART S-2421 EASY+ unit with access to the device Passport and wiring documentation.
- An active SIM card with data (or the connectivity method required by your installation) if cellular reporting is required by your deployment.
- Manufacturer configuration utility NTC Configurator or the approved configuration method from Navtelekom.
- Access to firmware packages and the device Passport for guidance on firmware compatibility and I/O mapping.
- A Plaspy account or fleet environment ready to receive and identify the tracker when it begins reporting.

## How This Tracker Connects to Plaspy

The SMART S-2421 EASY+ is configured to send GNSS position and device telemetry to the shared Plaspy server endpoint and port. Once pointed to the Plaspy server, the tracker opens a TCP or UDP session to the Plaspy endpoint and Plaspy automatically detects the tracker protocol to parse incoming messages.

- The device transmits GNSS location updates to d.plaspy.com or 54.85.159.138 using port 8888.
- Telemetry such as accelerometer events and configured inputs is reported to Plaspy for event processing.
- Plaspy ingests the messages, detects the protocol, and maps incoming telemetry to the device record in the platform.
- After configuration, live location, trip history, and I/O events appear in Plaspy for monitoring and rule based alerts.
- The choice of UDP or TCP can be made in the manufacturer tool as required by your network environment.

## Common Configuration Workflow

1. Obtain the SMART S-2421 EASY+ Passport, wiring example, and the NTC Configurator utility from Navtelekom.
2. Power the device, insert and activate the SIM if required, and confirm the device is reachable via the configurator.
3. In the manufacturer configuration tool, enter the server domain d.plaspy.com or the server IP 54.85.159.138 as the reporting endpoint.
4. Set the port to 8888 and select UDP or TCP if the device requires you to choose the transport.
5. Configure reporting intervals, I/O assignments and any accelerometer thresholds as needed for your fleet policies.
6. Apply or save the configuration in the tool and restart the device if the configurator or Passport requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking the device list or receiving initial telemetry in the Plaspy platform.

## Example Configuration Commands

The SMART S-2421 EASY+ is typically configured using the Navtelekom NTC Configurator utility or the manufacturer's configuration flow. Exact command syntax and the method to push configuration will vary by the NTC Configurator version and firmware release. When using the manufacturer tool, enter the server address as d.plaspy.com or 54.85.159.138 and the port as 8888, then choose UDP or TCP if prompted. Plaspy will automatically detect the tracker protocol once the device begins sending packets to the configured endpoint.

If you rely on SMS based configuration or specific command strings provided by Navtelekom, refer to the device Passport or the NTC Configurator documentation for the authoritative command format.

## Configuration Notes

- Firmware variations and hardware revisions may alter available fields in the configurator; always match your firmware version to the appropriate Passport and release notes.
- Choose UDP or TCP based on network reliability and your installer preference; both transports are supported by Plaspy on port 8888.
- Use the domain d.plaspy.com when possible to allow DNS based routing, or the IP 54.85.159.138 if DNS is not available in your environment.
- Confirm SIM APN and data access using the manufacturer's tool if cellular telemetry is required; APN values are carrier specific and are not provided here.
- Keep a backup of applied settings and document any custom I/O mapping so behavior can be repeated across fleet devices.

## Why Use Plaspy with This Configuration

Using the SMART S-2421 EASY+ with Plaspy provides a straightforward path to real time vehicle visibility, event driven alerts, and historical route analysis. The device's built in GNSS, accelerometer and flexible I/O make it a practical choice for small to mid sized fleets that require live tracking and telemetry integrated into Plaspy workflows.

To learn more about Plaspy and how the platform ingests device telemetry visit https://www.plaspy.com. For the latest device specific configuration steps, firmware files, and the official Passport, verify details on the manufacturer site https://www.navtelecom.ru/ since configuration methods and firmware behavior can change over time.
