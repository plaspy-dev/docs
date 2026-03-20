---
slug: /reachfar/rf_s1/configuration
id: rf_s1-configuration
sidebar_label: Configuration
title: Reachfar - RF-S1 Configuration
sidebar_class_name: menu_item_tracker
description: Configure Reachfar RF S1 smartwatch for Plaspy real time tracking and health telemetry with shared server settings
keywords:
  - Reachfar RF S1 configuration
  - Reachfar RF S1 setup
  - RF S1 Plaspy configuration
  - RF S1 GPS tracker setup
  - Reachfar wearable tracker configuration
  - RF S1 server configuration
  - Plaspy tracker setup
  - personal GPS tracker configuration
  - RF S1 tracking software configuration
  - RF S1 GPS platform setup
---

# Reachfar - RF-S1 Configuration

This page describes the public configuration context for using the Reachfar RF-S1 GPS Tracking Health Smart Watch with the Plaspy platform. It summarizes the practical settings and workflow you will use to point the RF-S1 at Plaspy for real time location, SOS and health telemetry delivery, and it explains what to check before integration. This guidance is intended to help integrators and technical users prepare the device for visibility in Plaspy while relying on manufacturer tools for device-specific controls.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type and vendor configuration tools. Use the information on this page as the public Plaspy-side reference and consult the Reachfar documentation and vendor tools for the device-specific commands and menus required to apply these settings on the RF-S1.

## Configuration Overview

The goal of configuration is to prepare the RF-S1 to send its position, SOS events and health telemetry to Plaspy reliably so the device appears in the Plaspy dashboard and triggers alerts as expected. Configuration focuses on pointing the watch at the Plaspy server endpoint, choosing an appropriate transport, and verifying connectivity and event reporting.

- Configure the tracker to report to the Plaspy server endpoint so location and telemetry arrive in the platform.
- Select the correct transport (UDP or TCP) and apply the shared Plaspy port so messages are accepted by the server.
- Save and apply settings through the official Reachfar configuration method or software.
- Validate the device in Plaspy by confirming location updates and event messages (SOS, removal alarm, telemetry).
- Document firmware version and any vendor tool steps used for future maintenance and troubleshooting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port

## Typical Requirements Before Setup

- A charged RF-S1 device with working battery and any required wearable accessories fitted.
- Active cellular connectivity for voice and data if the watch uses a cellular SIM for real time updates and calls. Verify network coverage for the deployment area.
- Access to the official Reachfar configuration method or vendor software for the RF-S1 (mobile app, SMS commands, or vendor tool as provided by Reachfar).
- A Plaspy account and access to your Plaspy workspace where you will verify the device appears and reports events.
- Knowledge of the device firmware version and any vendor-specific settings needed for telemetry or SOS event forwarding.
- Time to validate live reporting in Plaspy after the configuration is applied.

## How This Tracker Connects to Plaspy

When the RF-S1 is configured for Plaspy, it reports position, status and event messages to the shared Plaspy server endpoint and port so the data is ingested into the Plaspy platform for monitoring and alerting. Plaspy then presents real time location, SOS events and supported health telemetry on the dashboard and in alerts.

- The RF-S1 sends periodic location updates to d.plaspy.com using the configured transport and port 8888.
- SOS panic button events and removal alarms are forwarded to the same Plaspy endpoint for immediate handling.
- Health telemetry and status updates are sent alongside location so Plaspy can display device condition and trigger rules.
- Plaspy automatically detects the tracker protocol so the device typically only needs the correct endpoint, IP or domain, and port configured.
- Because all devices in Plaspy use the same port, apply port 8888 when configuring the RF-S1 so the platform will accept messages.

## Common Configuration Workflow

1. Access the official Reachfar configuration method or software for the RF-S1 as provided by the manufacturer or reseller.
2. Enter the Plaspy server endpoint by specifying d.plaspy.com or the server IP 54.85.159.138 in the device server fields.
3. Set the server port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the RF-S1 requires a transport selection, based on vendor guidance or deployment needs.
5. Apply or save the configuration in the Reachfar tool or via the device command method.
6. Restart the RF-S1 if the manufacturer instructions require a reboot to apply changes.
7. Validate that the device reports to Plaspy by checking for location updates and event messages in your Plaspy workspace.

## Example Configuration Commands

The RF-S1 model configuration commands and exact command syntax are provided by Reachfar and can vary by firmware and vendor tool. Plaspy accepts device messages sent to d.plaspy.com or 54.85.159.138 on port 8888 over UDP or TCP, and Plaspy will automatically detect the tracker protocol. For the precise SMS commands, vendor application steps, or desktop tool instructions to set the server endpoint and transport on the RF-S1, consult the Reachfar documentation or your device supplier.

If you have Reachfar supplied command templates that include placeholders such as [apn], [apnu] or [apnp], keep those placeholders when you apply them and replace them with your network operator values as required by the manufacturer instructions.

## Configuration Notes

- Firmware variations can change available menus and command syntax. Record the RF-S1 firmware version before and after configuration.
- Choose UDP or TCP according to the device tool guidance and network characteristics; Plaspy will accept either on port 8888 and detect the protocol automatically.
- When a device supports SMS or software based configuration, follow manufacturer security recommendations for passwords and access control.
- Confirm that voice call and emergency dialing settings are configured separately if the RF-S1 uses cellular voice features for SOS workflows.
- Keep a short checklist of applied settings including server domain or IP, port 8888, chosen transport, and the date of configuration to support future troubleshooting.

## Why Use Plaspy with This Configuration

Using the Reachfar RF-S1 with Plaspy provides a straightforward way to centralize location, SOS alerts and personal health telemetry into a single monitoring platform. For caregiver teams, social care organizations and remote monitoring deployments, this configuration allows fast visibility of critical events, continuous location tracking and consolidated history useful for follow up and compliance.

To learn more about Plaspy and how it supports device integration and monitoring, visit https://www.plaspy.com. For the latest RF-S1 device specific setup details, firmware notes and manufacturer commands consult the official Reachfar support resources at https://www.reachfargps.com/ since device methods and firmware behavior can change over time.
