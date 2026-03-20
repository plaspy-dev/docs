---
slug: /ulbotech/s101/configuration
id: s101-configuration
sidebar_label: Configuration
title: Ulbotech - S101 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for using the Ulbotech S101 OBD II BLE adapter with Plaspy server and compatible apps
keywords:
  - Ulbotech S101 configuration
  - S101 Plaspy setup
  - Ulbotech OBD II BLE
  - S101 OBD telemetry
  - Plaspy tracker configuration
  - S101 setup guide
  - vehicle telemetry Plaspy
  - OBD II adapter configuration
  - fleet telemetry setup
  - S101 Bluetooth adapter
---

# Ulbotech - S101 Configuration

This page covers the public configuration context for using the Ulbotech S101 OBD II BLE adapter with Plaspy. It focuses on what you need to know to forward OBD-II telemetry from the S101 through a Plaspy compatible device or gateway so that telemetry and diagnostics appear alongside GPS tracking in Plaspy. The S101 itself is a BLE OBD-II adapter and pairs with BLE-enabled smartphones, tablets, or gateways running Plaspy-compatible software to supply engine and sensor data into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects tracker protocols, but the exact manufacturer-side setup steps can vary by S101 firmware, hardware revision, installation method, and the configuration tools used by your app or gateway. This guide explains the public Plaspy endpoint and practical workflow for making the S101 telemetry visible in Plaspy while encouraging verification of any device-specific steps with Ulbotech documentation.

## Configuration Overview

This configuration process prepares the S101 and the forwarding device or app so OBD-II data from the adapter reaches Plaspy and is correlated with location and tracking data. The goal is to ensure the BLE link is stable, the forwarding application is pointed to the Plaspy endpoint, and the Plaspy platform receives and interprets the telemetry automatically.

- Ensure the S101 is physically installed in the vehicle OBD-II port and paired to a Plaspy compatible phone, tablet, or gateway.
- Configure the forwarding device or Plaspy-compatible app to use the Plaspy server endpoint and port so telemetry is routed into your Plaspy account.
- Validate connectivity by confirming live telemetry values appear in Plaspy dashboards and that OBD parameters are being recorded.
- Save and apply settings on the forwarding device, then restart connections as required to guarantee a stable feed.
- Use Plaspy reporting and alerts to verify OBD-driven events, such as fault codes or temperature thresholds, are processed.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol

These settings are the shared Plaspy endpoint details used for forwarding telemetry. Plaspy uses the same port for all supported devices and will detect the incoming tracker protocol automatically.

## Typical Requirements Before Setup

- A powered vehicle OBD-II port and a plugged-in S101 adapter
- A BLE-enabled smartphone, tablet, or gateway running a Plaspy-compatible app or forwarding software
- Access to the official Ulbotech configuration method or supported app for pairing and device settings
- Network connectivity from the forwarding device to reach d.plaspy.com or 54.85.159.138 on port 8888
- Credentials or account access to your Plaspy instance as required by the forwarding app
- A basic verification plan to confirm telemetry and diagnostic PIDs appear correctly in Plaspy

## How This Tracker Connects to Plaspy

The S101 streams standard OBD-II PIDs over Bluetooth 4.0 BLE to a paired device running a Plaspy-compatible application or gateway. That device acts as the networked forwarder, sending the telemetry to Plaspy at the shared server endpoint and port so the platform can merge telemetry with GPS tracking and produce reports.

- The S101 provides OBD-II data (RPM, coolant temp, fuel trims, speed, etc.) via BLE to the paired device
- The paired device or gateway forwards telemetry to d.plaspy.com (or 54.85.159.138) on port 8888
- Forwarding can use UDP or TCP on port 8888 depending on the forwarding app or gateway configuration
- Plaspy automatically detects the incoming tracker protocol and processes the telemetry for dashboards and alerts
- Once reporting is validated, Plaspy combines OBD telemetry with GPS data from the paired device or a separate Plaspy GPS tracker

## Common Configuration Workflow

1. Access the official Ulbotech configuration method or the Plaspy-compatible app you use to manage the S101 pairing and forwarding settings.
2. Pair the S101 with the BLE-enabled device and confirm live OBD PID readings locally in the app.
3. In the forwarding app or gateway settings enter the Plaspy server address as either d.plaspy.com or 54.85.159.138.
4. Set the destination port to 8888 in the forwarding configuration.
5. Choose UDP or TCP transport if the app or gateway requires a transport selection.
6. Apply or save the configuration in the forwarding app or gateway and restart the Bluetooth connection to the S101 if prompted.
7. Validate that the device reports telemetry to Plaspy by checking live values and diagnostics in your Plaspy interface.

## Example Configuration Commands

The S101 uses Bluetooth for connectivity and does not expose direct server configuration commands itself. Configuration of server endpoint and port is typically performed in the Plaspy-compatible forwarding app or gateway. Exact command syntax and steps vary by manufacturer software and firmware, so follow the app or gateway documentation when entering:

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

If your forwarding gateway requires command-line or text-based configuration, consult that gateway's public command syntax and substitute the Plaspy values above. Because the S101 is a BLE OBD-II adapter, there are no device-level TCP or UDP commands to send directly to the S101 itself.

## Configuration Notes

- The S101 is a BLE adapter; server and port configuration are applied in the forwarding device or Plaspy-compatible app rather than on the adapter.
- Firmware revisions, app versions, or gateway firmware can change the exact menu names and configuration flows; always check for the most recent instructions.
- If the forwarding app offers both UDP and TCP, choose the transport that best matches your network conditions and the app guidance; Plaspy will auto detect protocol on port 8888.
- Confirm that the paired device has stable internet access so telemetry can reach d.plaspy.com or 54.85.159.138 without interruption.
- Keep the S101 paired and periodically verify OBD PID consistency to ensure telemetry quality in Plaspy reports.

## Why Use Plaspy with This Configuration

Using the Ulbotech S101 with Plaspy delivers richer vehicle visibility by combining standard GPS position data with live OBD-II telemetry and diagnostics. For fleets and operators that need engine parameters, fuel analytics, and on-demand fault codes alongside location tracking, the S101 provides a low-cost, low-power way to stream that data via a BLE-enabled device into Plaspy dashboards and alerts.

To learn more about Plaspy and how it integrates telemetry and tracking, visit https://www.plaspy.com. For the latest device specific details, firmware notes, and manufacturer instructions for the S101, verify current information on Ulbotech’s official site http://www.ulbotech.com/.
