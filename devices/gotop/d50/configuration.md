---
slug: /gotop/d50/configuration
id: d50-configuration
sidebar_label: Configuration
title: GOTOP - D50 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP D50 pet tracker showing Plaspy server settings and practical setup steps
keywords:
  - GOTOP D50 configuration
  - GOTOP D50 setup
  - GOTOP D50 server configuration
  - GOTOP D50 Plaspy
  - D50 tracker configuration
  - Plaspy tracker setup
  - pet GPS tracker configuration
  - GPS tracker Plaspy integration
  - D50 pet tracker setup
  - GOTOP tracker Plaspy compatibility
---

# GOTOP - D50 Configuration

This page covers the public configuration context for using the GOTOP D50 pet GPS tracker with Plaspy. It explains the shared server settings Plaspy requires, describes the practical setup workflow, and highlights what you should confirm before integrating the D50 so it can report location and events to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this page to prepare the device for Plaspy and then consult the official GOTOP documentation for device-specific details.

## Configuration Overview

The configuration process ensures the D50 can establish a reliable data uplink to Plaspy so position fixes, motion events, SOS alerts, and route history appear in your Plaspy account. On the device side this typically means entering the Plaspy server endpoint and transport, confirming the device has a working data connection, and validating that the device reports successfully.

- Point the D50's data reporting settings to the Plaspy server endpoint so GPRS uplink delivers position and event data to Plaspy.
- Choose the transport type (UDP or TCP) if the tracker requires a selection and set the platform port to match Plaspy.
- Verify the device has an active data route and that GNSS or LBS positioning is producing location fixes.
- Save and apply settings on the tracker, then confirm the device appears online and reports in the Plaspy dashboard.
- Use Plaspy to validate live tracking, geofence alerts, history playback, and SOS/motion events once reporting is established.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Automatic protocol detection in Plaspy

Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when the device begins reporting to the server endpoint.

## Typical Requirements Before Setup

- A charged D50 with battery and power sufficient to perform configuration and an initial reporting cycle.
- An active SIM card with a valid data plan installed if the device uses GPRS for reporting.
- Access to GOTOP's official configuration method or software for the D50 (mobile app, web portal, SMS, or USB tool as provided by the manufacturer).
- The device IMEI or identifier available for registering or validating the unit in Plaspy.
- A Plaspy account or access to the platform to confirm the device shows online and sending telemetry.
- Understanding that manufacturer firmware and regional variants can affect available settings and menu names.

## How This Tracker Connects to Plaspy

When configured, the D50 sends location updates and device events over GPRS to Plaspy's shared server endpoint and port so Plaspy can display live positions, alerts, and historical routes. Plaspy ingests the incoming position and event messages and applies automatic protocol detection so devices using standard formats are recognized without special server-side changes.

- The device reports GNSS or LBS coordinates and timestamps to d.plaspy.com on port 8888.
- Event data such as motion alerts and SOS notifications are forwarded to Plaspy for immediate alerting.
- Plaspy automatically detects the tracker protocol when the device sends data to the configured server endpoint.
- The D50 may use either UDP or TCP transport on port 8888 depending on the tracker's configuration option.
- Plaspy displays live location, history playback, and geofence events once the D50 reports successfully.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software for the D50 (manufacturer app, web tool, SMS commands, or configuration utility).
2. In the device network or server settings, enter d.plaspy.com or 54.85.159.138 as the server address.
3. Set the reporting port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP if the device requires a transport selection and save the choice.
5. Apply or save the configuration on the tracker using the manufacturer tool.
6. Restart the D50 if required by the device or firmware to activate the new reporting settings.
7. Validate that the device reports to Plaspy by checking for online status, live location updates, and initial telemetry in your Plaspy account.

## Example Configuration Commands

No public device-specific commands are included here. The D50 supports standard GPRS reporting and may offer multiple configuration interfaces such as a GOTOP configuration app, web portal, or SMS-based commands. Exact command syntax and the available configuration interface depend on GOTOP firmware and the regional model.

If you have manufacturer-provided command examples or a configuration guide from GOTOP, apply the server settings shown on this page (d.plaspy.com or 54.85.159.138 and port 8888) within those commands or the manufacturer tool. Preserve any placeholders provided by GOTOP such as APN fields (for example {{apn}}, {{apnu}}, {{apnp}}) and replace them with your SIM operator values when required.

## Configuration Notes

- Firmware differences and regional variants can change menu names and the exact place to enter server settings; consult GOTOP documentation for the D50 firmware revision you have.
- Choose UDP or TCP based on the tracker's configuration options; Plaspy accepts both on port 8888 and performs automatic protocol detection server side.
- The Plaspy server endpoint and port are shared across supported devices to simplify configuration and platform onboarding.
- If SMS-based setup is available on your D50, you may be able to send configuration commands via SMS to set server and APN values; follow GOTOP's published SMS command syntax.
- Confirm APN and SIM operator settings before configuring server fields to ensure the tracker can establish a GPRS session.

## Why Use Plaspy with This Configuration

Using the GOTOP D50 with Plaspy gives owners and small fleet managers a simple path to real-time pet tracking, SOS alerting, and historical route analysis on a single platform. The D50's hybrid GNSS and LBS positioning, motion detection, and compact waterproof design make it practical for continuous pet monitoring, while Plaspy receives location and event reports via the shared server endpoint to provide mapping, alerts, and history playback.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. For the latest device-specific configuration instructions, firmware behavior, and manufacturer details for the GOTOP D50, verify the current documentation at https://www.gotop.cc/.
