---
slug: /careu/ugo/configuration
id: ugo-configuration
sidebar_label: Configuration
title: CAREU - Ugo Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for CAREU Ugo setup with Plaspy covering server settings connectivity checklist and setup workflow
keywords:
  - CAREU Ugo configuration
  - CAREU Ugo setup
  - CAREU Ugo server configuration
  - CAREU Ugo Plaspy setup
  - Ugo GPS tracker configuration
  - CAREU tracker Plaspy compatibility
  - vehicle tracking setup Ugo
  - OBD II tracker configuration
  - Plaspy server configuration
  - fleet management tracker setup
---

# CAREU - Ugo Configuration

This page documents the public configuration context for using the CAREU Ugo OBD II tracker with Plaspy. It explains the shared server settings Plaspy requires and the practical steps installers and technicians typically follow to prepare Ugo devices for fleet visibility and live telemetry on the Plaspy platform.

Plaspy uses common server settings across supported trackers and automatically detects the tracker protocol when the device connects. Exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools, so use this guide together with CAREU device documentation when applying settings to a specific Ugo unit.

## Configuration Overview

The configuration process prepares the Ugo tracker to communicate reliably with Plaspy and to appear in your Plaspy instance for live mapping and reporting. It focuses on pointing the device to the Plaspy server, confirming transport and connectivity, and verifying that telemetry arrives as expected.

- Point the Ugo to Plaspy using the shared server endpoint and port so the device can establish a session.
- Choose the appropriate transport mode if the device requires a transport selection.
- Verify cellular registration, SIM or eSIM provisioning, and network coverage before attempting platform tests.
- Apply and save configuration and perform a restart when required to commit network settings.
- Validate the tracker shows up in Plaspy with expected position reports, OBD II telemetry, and accelerometer events.
- Confirm remote management and FOTA options remain available after configuration.

## Plaspy Server Settings

Use these public Plaspy server settings when configuring CAREU Ugo for Plaspy. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A powered Ugo device with OBD II plug installed correctly in the vehicle
- Active cellular connectivity using either a standard SIM or the device eSIM as applicable
- Access to the official CAREU configuration method or software from the device vendor
- Knowledge of whether the device variant requires explicit transport selection between UDP or TCP
- A Plaspy account and permissions to view or validate incoming device data on the platform
- Basic tools for rebooting or power cycling the device after configuration

## How This Tracker Connects to Plaspy

When configured for Plaspy, the CAREU Ugo sends GNSS positions and vehicle telemetry to the shared Plaspy server endpoint and port. Plaspy ingests those reports for mapping, alerts, and historical reports while automatically identifying the tracker protocol.

- The tracker is configured to report to d.plaspy.com or 54.85.159.138 on port 8888
- Device reports are sent using either UDP or TCP transport depending on device firmware or selection
- Plaspy receives position updates and OBD II telemetry for live dashboarding and reports
- Accelerometer events and driving behavior alerts are forwarded to Plaspy for event handling
- Plaspy automatically detects the protocol used by the Ugo when it connects to the shared port

## Common Configuration Workflow

1. Access the official CAREU configuration method or software provided by the manufacturer or vendor.
2. If required by the tool, enter the Plaspy server endpoint as d.plaspy.com or the server IP 54.85.159.138.
3. Set the device port to 8888 as the outbound reporting port.
4. Choose UDP or TCP transport if the device requires explicit transport selection.
5. Apply or save the configuration changes in the manufacturer tool.
6. Restart or power cycle the Ugo if the device or tool indicates a reboot is required to commit settings.
7. Validate that the device reports to Plaspy by confirming incoming telemetry, position updates, and presence in the Plaspy interface.

## Example Configuration Commands

The exact configuration method for CAREU Ugo can vary by firmware and vendor tool. Some installers use a desktop configuration utility or a mobile app, while others may use SMS or remote provisioning based on CAREU tools. Because manufacturer tools differ by region and firmware, follow the official CAREU configuration instructions for command syntax and exact procedures.

If you have a set of public CAREU commands from your vendor documentation, run them in the order specified by CAREU and include the Plaspy server settings listed above. For placeholder fields in manufacturer commands, keep placeholders such as [apn] or [apnu] as provided and replace them with your network specific values when instructed.

## Configuration Notes

- Firmware differences can change the exact menu names or command syntax used in the CAREU configuration tool.
- Some Ugo variants support SMS or remote provisioning for setup while others rely on a local configuration utility or FOTA workflows.
- Choose UDP or TCP based on your deployment requirements and any guidance from CAREU or your connectivity provider.
- Plaspy uses the same port 8888 for all devices and will automatically detect the tracker protocol when the device connects.
- If you plan to use FOTA or remote management, verify that those features remain enabled after changing server settings.

## Why Use Plaspy with This Configuration

Using CAREU Ugo with Plaspy provides a straightforward path to real time vehicle visibility using a plug and play OBD II form factor. Pointing Ugo at Plaspy centralizes location, OBD II telemetry, and accelerometer event reporting so fleet managers can monitor trips, driver behavior, and vehicle health from a single platform.

To learn more about Plaspy visit https://www.plaspy.com and review CAREU manufacturer details at https://www.systech-iot.com/ for the most current device specific setup details and firmware guidance. Device specific configuration methods and firmware behavior can change over time so verify the latest instructions on the manufacturer website before applying settings in production.
