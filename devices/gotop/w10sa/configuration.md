---
slug: /gotop/w10sa/configuration
id: w10sa-configuration
sidebar_label: Configuration
title: GOTOP - W10SA Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for GOTOP W10SA integration with Plaspy using shared server settings and practical setup steps
keywords:
  - GOTOP W10SA configuration
  - GOTOP W10SA setup
  - GOTOP tracker configuration
  - W10SA Plaspy setup
  - W10SA server settings
  - Plaspy tracker integration
  - GPS tracker configuration
  - personal GPS tracker setup
  - W10SA GT06 808 Tianqin
  - GOTOP W10SA troubleshooting
---

# GOTOP - W10SA Configuration

This page covers the public configuration context for using the GOTOP W10SA personal GPS tracker with the Plaspy platform. It focuses on the shared server settings Plaspy requires and the practical steps operators typically follow to point a W10SA device at Plaspy for real time tracking, alarms, and playback. Use this guide together with the device manual and vendor tools for device-specific setup details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on the platform side, while exact manufacturer side setup steps can vary depending on firmware, hardware revision, installation type, and the configuration tool provided by your vendor. The W10SA supports common tracking protocols and configurable server IP and port, so integration with Plaspy is typically a matter of entering the correct server endpoint and transport and validating connectivity.

## Configuration Overview

This configuration process prepares a W10SA to deliver location and alarm telemetry to Plaspy for live tracking and historic playback. The goal is to point the device to the Plaspy endpoint, choose the appropriate transport, and confirm the device is reporting as expected so it becomes visible and manageable in the Plaspy dashboard.

- Point the W10SA to the Plaspy server endpoint and set the common Plaspy port.
- Select UDP or TCP transport on the device if required by its configuration interface.
- Save and apply settings on the tracker using the official GOTOP configuration tool or SMS commands depending on the device variant.
- Verify the device registers with Plaspy and sends periodic position updates and alarm events.
- Confirm alarm types such as power loss, overspeed, vibration, or geofence are forwarded to Plaspy.
- Monitor the device in Plaspy for live updates and route playback once connectivity is validated.

## Plaspy Server Settings

When configuring the W10SA for Plaspy, use the following public server settings exactly as shown:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

These values are the shared Plaspy endpoint settings used to receive telemetry from compatible trackers including the W10SA.

## Typical Requirements Before Setup

- A charged and operational W10SA device with firmware that supports configuring server IP and port.
- Access to the official GOTOP configuration method or software for the W10SA (configuration app, desktop tool, or documented SMS commands).
- An active cellular service on the device with data enabled and sufficient signal for GPRS or LTE reporting.
- Knowledge of which transport the device requires to send data (UDP or TCP) if the device prompts for a choice.
- A way to restart or reboot the device after applying configuration changes.
- Access to Plaspy account or project where the device will be validated so you can confirm incoming telemetry.

## How This Tracker Connects to Plaspy

The W10SA sends periodic GPS coordinates and alarm signals over the cellular network to the Plaspy endpoint. Plaspy ingests the telemetry, maps protocol fields automatically, and exposes real time positions, playback routes, and configured alerts in the platform.

- The tracker is configured to report to the shared Plaspy server endpoint at d.plaspy.com or directly to IP 54.85.159.138.
- All devices report on the same Plaspy port 8888 so the port remains consistent across deployments.
- Plaspy detects the tracker protocol automatically so the platform can parse GT06, 808, Tianqin, or other supported protocols from the W10SA.
- The device delivers position updates and alarm events such as power loss, overspeed, vibration, and geofence triggers to Plaspy.
- Once reporting, the device becomes visible in Plaspy for monitoring, notifications, and historic route playback.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software for the W10SA (manufacturer app, desktop tool, or documented SMS commands).
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server or platform field.
3. Set the device port to 8888, matching Plaspy's shared ingestion port.
4. Choose UDP or TCP transport if the device requires a transport selection in its settings.
5. Apply or save the configuration using the manufacturer tool or command interface.
6. Restart or power cycle the device if required by the W10SA firmware to activate new server settings.
7. Validate that the device reports to Plaspy by checking for initial heartbeat or position messages in your Plaspy account.

## Example Configuration Commands

The W10SA supports configuration through the GOTOP provided configuration tools and may also accept SMS or software commands depending on the firmware revision. Exact command syntax and availability vary by manufacturer firmware and the configuration method provided with the device, so consult the official GOTOP documentation for precise command formats. For Plaspy integration you will typically enter the Plaspy server domain or IP and set port 8888, then choose UDP or TCP as required by the device interface.

## Configuration Notes

- Firmware and hardware revisions can affect the available configuration options and the exact steps required to set the server and transport. Always confirm the commands and menus with the device manual.
- When a device offers both UDP and TCP, evaluate network conditions and carrier behavior; Plaspy accepts either transport and auto detects the protocol.
- Cellular connectivity must be active and stable for the W10SA to deliver telemetry. Confirm the device has an active SIM with data access and adequate signal.
- Some W10SA variants provide SMS based setup while others rely on a configuration app or desktop tool. Use the method that matches your device build.
- Confirm alarm types and reporting intervals after configuration to ensure Plaspy receives the expected telemetry frequency and alert events.

## Why Use Plaspy with This Configuration

Using the GOTOP W10SA with Plaspy provides a compact and straightforward way to add reliable real time location and alarm reporting to your tracking environment. The W10SA's support for common tracking protocols and configurable server settings means you can point devices directly at Plaspy, and Plaspy will automatically detect the protocol and ingest telemetry for monitoring, notifications, and historical playback.

Learn more about how Plaspy can manage W10SA devices and other compatible trackers at https://www.plaspy.com. For the most current device specific configuration commands, firmware notes, and manufacturer guidance please verify setup details with the official GOTOP documentation at https://www.gotop.cc/ .
