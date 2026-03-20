---
slug: /ulbotech/t380/configuration
id: t380-configuration
sidebar_label: Configuration
title: Ulbotech - T380 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Ulbotech T380 GPS tracker integration with Plaspy using shared server settings and practical setup steps
keywords:
  - Ulbotech T380 configuration
  - Ulbotech T380 setup
  - Ulbotech T380 Plaspy
  - T380 tracker configuration
  - T380 server configuration
  - T380 GPS setup
  - Ulbotech OBDII tracker setup
  - Plaspy tracker integration
  - fleet GPS configuration
  - vehicle tracker Plaspy setup
---

# Ulbotech - T380 Configuration

This page covers the public configuration context needed to use the Ulbotech T380 GPS OBDII tracker with Plaspy. It summarizes the shared server settings Plaspy requires and explains the practical steps to point the device at Plaspy so your vehicle telemetry is visible in the platform. The guidance here is meant for technicians and integrators preparing the T380 for Plaspy-managed tracking and fleet workflows.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol once a device connects. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools; use this page as a practical reference and verify device-specific details against Ulbotech documentation when necessary.

## Configuration Overview

Preparing the T380 to report into Plaspy focuses on setting the device endpoint and validating connectivity so location and event telemetry flow reliably into the platform. The T380’s plug-and-play OBDII design, cellular modem, and Wi‑Fi features support several configuration paths depending on installer preference.

- Point the device to the Plaspy server endpoint using the shared server settings provided below.
- Ensure the T380 has vehicle power and an active SIM with correct APN or accessible Wi‑Fi for uplink.
- Choose UDP or TCP transport on the device if required, and set the required port.
- Confirm the device is accepting GNSS fixes and reporting accelerometer and I/O events to Plaspy.
- Verify visibility in Plaspy after applying settings so live tracking, alerts, and reports are available.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888 — all devices in Plaspy use the same port  
- Transport support UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- Vehicle power via OBDII connector so the T380 can initialize and report telemetry.  
- Active micro SIM card with a data plan and correct APN for the region if using cellular uplink.  
- Access to Ulbotech official configuration methods such as micro USB debug, vendor software, or documented device tools.  
- Knowledge of whether you will use LTE data or Wi‑Fi bridging/hotspot for device connectivity.  
- A Plaspy account or onboarding details for validating the device appears in the platform.  
- A test plan to confirm GNSS fixes, accelerometer events, and I/O signals are reported after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the T380 sends GNSS location updates and event telemetry to the shared Plaspy server endpoint and port. The device may use its 4G LTE modem or available Wi‑Fi bridge to transmit data; Plaspy ingests this telemetry and automatically determines the correct protocol for communication.

- The device is set to report to d.plaspy.com or 54.85.159.138 on port 8888.  
- Transport can be UDP or TCP depending on device settings and installer choice.  
- Plaspy automatically detects the tracker protocol and accepts device telemetry on the shared port.  
- GNSS fixes, accelerometer events, and I/O state changes are forwarded to Plaspy for live tracking and alerts.  
- Wi‑Fi bridging or hotspot connectivity can be used to reduce cellular usage while maintaining uplink to Plaspy.

## Common Configuration Workflow

1. Access the official Ulbotech configuration method or software for the T380 (micro USB debug mode, vendor GUI, or documented tool).  
2. Enter the Plaspy server endpoint using either d.plaspy.com or the server IP 54.85.159.138 in the device server host field.  
3. Set the device server port to 8888. Plaspy uses the same port for all supported devices.  
4. If the device requires a transport selection, choose UDP or TCP on port 8888 based on your network needs.  
5. Apply or save the device configuration using the vendor tool or device interface.  
6. Restart or power cycle the T380 if required by the manufacturer to apply network changes.  
7. Validate the device reports to Plaspy by checking device connectivity and recent telemetry in your Plaspy account or platform view.

## Example Configuration Commands

The exact configuration commands and syntax depend on Ulbotech firmware and the vendor configuration utility. Ulbotech often provides configuration interfaces via micro USB or a vendor application; commands may also be available through the device debug interface. Because commands vary by firmware and toolchain, consult the official Ulbotech documentation for precise command examples and supported configuration channels.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available features; always confirm the T380 firmware version before applying a configuration workflow.  
- TCP or UDP selection can affect delivery guarantees and firewall traversal; choose the transport that matches your network environment.  
- The T380 supports Wi‑Fi bridging and a hotspot; use Wi‑Fi when available to reduce cellular costs while ensuring the device still points to d.plaspy.com on port 8888.  
- Plaspy automatically detects the tracker protocol, so pointing the device to the shared server endpoint is the primary requirement.  
- Keep Ulbotech configuration tools and firmware up to date to benefit from FOTA and auto APN features.

## Why Use Plaspy with This Configuration

Using the Ulbotech T380 with Plaspy provides a practical solution for organizations that need reliable vehicle visibility, telemetry-driven alerts, and remote control capabilities. The plug-and-play OBDII form factor combined with the T380’s GNSS, accelerometer, and immobilizer output makes it straightforward to collect the location and event data Plaspy uses for live maps, driver behavior reports, and anti-theft workflows.

To learn more about Plaspy and how it works with compatible trackers like the T380, visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details, review Ulbotech documentation at http://www.ulbotech.com/ to verify setup steps and firmware instructions.
