---
slug: /careu/ucan/configuration
id: ucan-configuration
sidebar_label: Configuration
title: CAREU - UCAN Configuration
sidebar_class_name: menu_item_tracker
description: Public technical configuration guidance for CAREU UCAN tracker integration with Plaspy servers and platform
keywords:
  - CAREU UCAN configuration
  - CAREU UCAN setup
  - CAREU UCAN Plaspy
  - UCAN OBD II configuration
  - UCAN tracker setup
  - Plaspy server configuration
  - Plaspy tracker integration
  - vehicle GPS tracker configuration
  - fleet tracking UCAN
  - OBD II tracker Plaspy
---

# CAREU - UCAN Configuration

This page covers the public configuration context for using the CAREU UCAN GPS tracker with Plaspy. It summarizes the practical server settings and setup workflow you will apply when provisioning UCAN devices for fleet monitoring on Plaspy. The guidance here is focused on the information required to point the device at Plaspy and verify connectivity; manufacturer specific user interfaces and vendor tools are the authoritative source for device side steps.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this document to prepare UCAN units for Plaspy connectivity and to understand the verification steps, and review the device manufacturer documentation for model specific procedures.

## Configuration Overview

The purpose of configuring a CAREU UCAN for Plaspy is to ensure the unit transmits GNSS position and OBD telemetry to the Plaspy ingestion endpoint so fleet managers gain immediate visibility in the platform. Configuration primarily prepares the tracker for cellular transmission to Plaspy, validates that packets reach the platform, and confirms telemetry and event reporting are visible in the Plaspy dashboard.

- Point the UCAN to the Plaspy server endpoint and confirm transport protocol settings.
- Ensure the device has cellular connectivity and required provisioning such as SIM or eSIM.
- Validate that OBD telemetry and accelerometer events are enabled and reporting.
- Save and apply settings on the device, then verify the device appears and reports in Plaspy.
- Troubleshoot connectivity by checking signal, APN settings on the device, and firmware compatibility.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the UCAN device:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP can be used to deliver data to the server
- Plaspy automatically detects the tracker protocol so the platform can accept compatible packets without per device protocol selection

Note: Plaspy uses the same port for all supported devices and will detect the protocol automatically, so you only need to set the server endpoint and transport on the device side.

## Typical Requirements Before Setup

- Confirm the UCAN unit is powered via the vehicle OBD II port and is in a state ready for configuration.
- Ensure the device has an active cellular subscription or eSIM profile and adequate network coverage.
- Access to the official CAREU configuration method such as the manufacturer configuration tool, web interface, or SMS command list.
- A Plaspy account and the ability to view device reports in the platform for validation.
- Knowledge of any APN or carrier settings required by the installed SIM or eSIM plan.
- Confirm the device firmware is up to date or documented for compatibility with Plaspy if remote configuration or FOTA is planned.

## How This Tracker Connects to Plaspy

When configured for Plaspy, UCAN transmits location and vehicle telemetry to the shared Plaspy server endpoint and port so fleet data appears in the Plaspy platform for monitoring and reporting. The UCAN sends periodic position updates and event packets over cellular and the platform ingests those packets for processing.

- GNSS position fixes are sent to the Plaspy server endpoint d.plaspy.com on port 8888 using the selected transport.
- OBD II telemetry including speed, RPM, odometer and DTCs is transmitted alongside position data.
- Accelerometer events such as harsh braking, harsh acceleration, and impact events are reported to Plaspy for event driven alerts.
- The device uses UDP or TCP to deliver packets depending on the configuration; Plaspy accepts either and will detect the correct protocol.
- After setup, verify the UCAN unit appears in Plaspy and that position and telemetry packets are visible in the device feed.

## Common Configuration Workflow

1. Access the official CAREU configuration method or manufacturer software for UCAN configuration.
2. In the device server settings enter the Plaspy server as d.plaspy.com or use the IP address 54.85.159.138 if required by the tool.
3. Set the device server port to 8888 to match Plaspy ingestion configuration.
4. Choose UDP or TCP transport if the device requires a transport selection and save that choice.
5. Apply or save the configuration on the device using the manufacturer tool or the UCAN configuration interface.
6. Restart the device if the tool or documentation requires a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking the device feed in the Plaspy dashboard for position and telemetry updates.

## Example Configuration Commands

This model configuration file did not include public SMS or CLI command examples. Exact commands and the interface used to provision the UCAN will vary by manufacturer configuration tool, firmware revision, or installer workflow. Use the CAREU configuration application, web interface, or the official command reference from the manufacturer when available to set the server domain d.plaspy.com (or 54.85.159.138) and port 8888 and choose UDP or TCP as required.

If you have an official command set from CAREU or installer SMS commands, apply them in the order the manufacturer specifies and then confirm device reporting in Plaspy.

## Configuration Notes

- Firmware differences can change the configuration menu layout or available options; verify steps against the UCAN firmware revision before bulk deployment.
- If the device configuration tool allows selecting TCP or UDP, choose based on installer preference; Plaspy accepts both and will detect the protocol automatically.
- Keep APN and carrier provisioning information handy; cellular connectivity must be active for the device to reach d.plaspy.com on port 8888.
- For fleets using eSIM provisioning, follow the vendor eSIM guidance and confirm the UCAN is registered on the expected carrier network.
- Use manufacturer supplied tools for remote configuration and FOTA updates to maintain compatibility and minimize field intervention.

## Why Use Plaspy with This Configuration

Integrating CAREU UCAN with Plaspy gives fleet operators immediate access to vehicle location, OBD telemetry, and event reporting in a single platform. The plug and play OBD II form factor reduces installation time while the device telemetry and accelerometer events support maintenance workflows, driver behavior monitoring, and theft protection when combined with Plaspy alerts and reporting.

To learn more about Plaspy and how it handles device data, visit https://www.plaspy.com. For the latest device specific setup instructions, firmware notes, and manufacturer configuration tools, verify details with the device maker at https://www.systech-iot.com/ as specifications and setup methods can change over time.
