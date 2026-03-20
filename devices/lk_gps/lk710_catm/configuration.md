---
slug: /lk_gps/lk710_catm/configuration
id: lk710_catm-configuration
sidebar_label: Configuration
title: LK-GPS - LK710-CatM Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure LK710 CatM tracker for use with Plaspy servers and platform
keywords:
  - LK GPS LK710 CatM configuration
  - LK710 CatM setup
  - LK GPS tracker configuration
  - Plaspy tracker setup
  - vehicle tracking configuration
  - fleet management tracker setup
  - Cat M tracker configuration
  - LK710 Plaspy compatibility
  - GPS tracker server configuration
  - SMS configuration LK710
---

# LK-GPS - LK710-CatM Configuration

This page describes the public configuration context for using the LK710‑CatM with Plaspy. It summarizes the practical server settings and setup workflow you will use to connect this Cat‑M GPS tracker to Plaspy for real time tracking, telemetry, and immobilizer event reporting. Information here is intended to help installers and integrators prepare the device for Plaspy visibility using manufacturer tools or SMS based setup where available.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on connection. Exact manufacturer side steps can vary depending on firmware level, hardware revision, installation type, and the vendor configuration tools you use. Review manufacturer documentation for device specific commands and safety guidance as you work through the configuration.

## Configuration Overview

Preparing the LK710‑CatM for Plaspy focuses on directing the device to the Plaspy server endpoint and confirming that location, battery, and control events are visible in the platform. The process typically covers network readiness, entering the correct server and port, selecting a transport if the device requires it, and validating that reports reach Plaspy.

- Configure the device to send telemetry and location to Plaspy using the provided server settings
- Ensure Cat M cellular connectivity and optional SMS configuration are functional for remote setup
- Set transport and port so the tracker can initiate sessions to Plaspy and be discovered
- Validate that GPS, battery status, and immobilizer events are reported to Plaspy dashboards
- Confirm visibility in Plaspy and test remote controls where applicable

## Plaspy Server Settings

- Server domain d.plaspy.com for tracker reporting
- Server IP 54.85.159.138 as an alternative endpoint
- Port 8888 used by all devices in Plaspy
- Transport support: configure the tracker to use UDP or TCP on port 8888 if the device requires a transport selection
- Plaspy automatically detects the tracker protocol when the device connects to the shared port

## Typical Requirements Before Setup

- A powered and accessible LK710‑CatM unit with any required connections completed
- A working Cat M capable SIM with data and SMS enabled where SMS configuration is used
- Cellular coverage for Cat M networks at the installation location
- Access to the LK‑GPS manufacturer configuration method such as SMS commands or vendor software
- A Plaspy account or provisioning information to verify device visibility after setup
- Knowledge of any immobilizer wiring and safe installation practices if remote engine cut off is required

## How This Tracker Connects to Plaspy

The LK710‑CatM transmits positional and status updates over Cat‑M cellular networks to the Plaspy server endpoint and port, where Plaspy ingests the data for real time display, alerts, and historical records. Plaspy receives standard device reports and will detect the protocol automatically so you do not need to specify a protocol type beyond the transport choice when required.

- The tracker is configured to report to d.plaspy.com or to 54.85.159.138 on port 8888
- Use UDP or TCP transport on port 8888 if the tracker prompts for a protocol preference
- Plaspy automatically detects the device protocol once a session is established on the shared port
- Location, battery capacity, and immobilizer events are sent to Plaspy and appear in the platform
- Successful connection makes the device visible in Plaspy dashboards and enables alerts and monitoring

## Common Configuration Workflow

1. Access the official LK‑GPS configuration method for the LK710‑CatM such as SMS commands or the manufacturer configuration software
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field
3. Set port 8888 as the destination port for telemetry and control messages
4. Choose UDP or TCP if the device requires a transport selection during configuration
5. Apply or save the configuration settings in the manufacturer tool or send the SMS command to store network parameters
6. Restart the device if required by the manufacturer or firmware to activate the new server settings
7. Validate that the device reports to Plaspy by checking device visibility and telemetry in the Plaspy platform

## Example Configuration Commands

The LK‑GPS LK710‑CatM supports SMS and vendor tool based configuration, but exact commands and syntax depend on the manufacturer firmware and regional firmware variants. Because model specific SMS commands and vendor software commands vary, use the official LK‑GPS configuration guide or the vendor tool to enter these exact values:

- Server domain or IP to use when prompted d.plaspy.com or 54.85.159.138
- Port to enter when prompted 8888
- Transport choice UDP or TCP if required by the device

Refer to the LK‑GPS documentation for the precise SMS templates or configuration tool steps required to save these values on the device.

## Configuration Notes

- Firmware differences and regional hardware variants can change command syntax and available configuration options; verify the device firmware before applying mass configuration
- Cat‑M connectivity and SIM profile requirements vary by carrier and region; confirm that the SIM supports Cat‑M network access and data plus SMS if needed
- Choose UDP or TCP based on your installer preference or the manufacturer recommendation; Plaspy will detect the protocol automatically once the device connects
- The Plaspy platform uses the same port 8888 for all supported devices which simplifies server settings across a mixed device fleet
- For immobilizer wiring and safety critical installation steps follow LK‑GPS installation guides and best practices

## Why Use Plaspy with This Configuration

Using the LK710‑CatM with Plaspy gives operators a simple, unified way to collect real time location and event data from compact, rugged trackers. The shared server settings and automatic protocol detection in Plaspy simplify device onboarding and reduce per device configuration complexity, letting teams focus on deployment and operational workflows rather than per unit networking details.

To learn more about Plaspy and how it supports fleet visibility and device management visit https://www.plaspy.com. For the most current and device specific configuration commands, firmware notes, and installation guidance verify details with the LK GPS manufacturer documentation at https://www.lk-gps.com.
