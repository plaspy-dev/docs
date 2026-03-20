---
slug: /ulbotech/l101/configuration
id: l101-configuration
sidebar_label: Configuration
title: Ulbotech - L101 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configuring the Ulbotech L101 OBD GPS tracker for use with Plaspy servers and fleet management workflows
keywords:
  - Ulbotech L101 configuration
  - Ulbotech L101 setup
  - L101 Plaspy configuration
  - Ulbotech GPS tracker configuration
  - OBDII tracker setup
  - Plaspy server settings
  - vehicle telemetry setup
  - fleet tracking L101
  - L101 OBDII configuration
  - GPS platform integration
---

# Ulbotech - L101 Configuration

This page documents the public configuration context for using the Ulbotech L101 with Plaspy. It covers the shared server settings Plaspy requires, the general configuration goals for the L101, and practical guidance to prepare the device so Plaspy can consume location and OBDII telemetry. Use this guide together with the device manufacturer documentation for device specific steps.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol when devices report to the platform. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, or vendor tools, so follow Ulbotech configuration methods while applying the server and transport settings listed on this page.

## Configuration Overview

Configuring the L101 for Plaspy focuses on preparing the plug-and-play OBDII device to forward recorded GPS and vehicle telemetry to the Plaspy ingestion endpoint so the unit becomes visible in realtime dashboards and reports. The L101 can forward data via paired mobile gateways or USB/microSD export as described by the manufacturer, and configuration typically consists of telling the device or gateway where to send data and which transport to use.

- Provide the Plaspy server endpoint and port so the device or its mobile gateway knows where to upload data.
- Select the transport mode (UDP or TCP) if the device or gateway requires a choice.
- Validate connectivity from the L101 (or its paired gateway) to the Plaspy server.
- Confirm OBDII telemetry and driver event reporting are visible in Plaspy after successful uploads.
- Save or apply settings on the L101 or the manufacturer tool and restart the device or gateway if required.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when data arrives

These values are the public Plaspy endpoint and must be entered into the manufacturer configuration tool, paired mobile gateway, or upload settings used with the L101.

## Typical Requirements Before Setup

- Access to the Ulbotech L101 physical device and the vehicle OBDII port for plug and play installation.
- A power source or vehicle ignition present so the device can operate during configuration and testing.
- A paired mobile device or gateway if the L101 will upload data via Bluetooth forwarding rather than an integrated cellular link.
- Access to Ulbotech configuration tools or instructions via micro USB, microSD, or the vendor software for applying server settings.
- A formatted microSD card or USB access for local data export if you intend to use file-based uploads or diagnostics.
- A Plaspy account and the appropriate project or fleet information ready for validating device telemetry and visibility.

## How This Tracker Connects to Plaspy

The L101 records GNSS position and OBDII telemetry locally and forwards that data to a server or gateway configured to send to Plaspy. When configured with the Plaspy endpoint and correct transport, the device data becomes available for real time monitoring, alerts, and historical reporting within Plaspy.

- The L101 is configured (via manufacturer tool or mobile gateway) to send data to d.plaspy.com or 54.85.159.138.
- Data uploads target port 8888 so Plaspy can ingest the stream.
- The device or gateway can use UDP or TCP as the transport depending on the upload method; Plaspy accepts either.
- Plaspy performs automatic protocol detection on incoming connections so you do not need to specify a protocol name in Plaspy.
- Once reporting begins, position fixes, OBDII parameters, driver events, and immobilizer states become visible in Plaspy dashboards and alerts.

## Common Configuration Workflow

1. Access the official Ulbotech configuration method or software via micro USB, microSD configuration file, or the vendor mobile tool.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the IP 54.85.159.138 depending on the configuration interface you are using.
3. Set the destination port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP if the device or gateway requires a transport selection.
5. Apply or save the configuration changes in the Ulbotech tool or gateway settings.
6. Restart the L101 or the paired gateway if the manufacturer instructions require a reboot for settings to take effect.
7. Validate that the device reports to Plaspy by checking device visibility and incoming telemetry in your Plaspy account.

## Example Configuration Commands

The exact command syntax and method for writing server and transport settings depends on the Ulbotech configuration interface, firmware version, and vendor tool. Typical entry points are the Ulbotech desktop utility, a microSD configuration file, or a mobile gateway app. In all cases you will supply the Plaspy endpoint d.plaspy.com or 54.85.159.138 and the port 8888 and choose UDP or TCP if prompted.

If your vendor tool supports a text based configuration file, the relevant fields to populate are the server host, server IP (optional), port 8888, and transport selection. Refer to Ulbotech documentation for exact command or file format required by the L101.

## Configuration Notes

- Different firmware releases or hardware revisions of the L101 may expose distinct configuration interfaces; always check Ulbotech documentation for the correct procedure.
- Choose UDP for simple low latency reporting or TCP when the upload method or gateway requires a connection oriented transport; Plaspy accepts both and auto detects the protocol.
- If using a paired mobile device or Bluetooth gateway to forward data, confirm the gateway is configured with d.plaspy.com or 54.85.159.138 and port 8888.
- Use microSD or USB export for offline data retrieval and diagnostics when network forwarding is not available.
- When in doubt, follow manufacturer tools for saving and applying settings and perform a restart if settings are not applied immediately.

## Why Use Plaspy with This Configuration

Pairing the Ulbotech L101 with Plaspy gives fleet operators and service providers a straightforward path from plug-and-play OBDII telemetry to actionable insights. The L101’s OBDII diagnostics, driver event detection, immobilizer output, and BLE connectivity map cleanly into Plaspy’s ability to ingest and normalize tracker data for real time tracking, alerts, and historical reporting.

Learn more about how Plaspy can use the L101 for fleet monitoring and telematics on the Plaspy website https://www.plaspy.com. Device specific configuration steps, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions with Ulbotech at http://www.ulbotech.com/ before deploying at scale.
