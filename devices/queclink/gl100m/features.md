---
slug: /queclink/gl100m/features
id: gl100m-features
sidebar_label: Features
title: QuecLink - GL100M Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the QuecLink GL100M GPS tracker and how its capabilities integrate with Plaspy for vehicle and asset tracking
keywords:
  - QuecLink GL100M
  - QuecLink GL100M features
  - GL100M GPS tracker
  - QuecLink GPS tracker
  - GL100M features Plaspy
  - vehicle tracking GL100M
  - asset tracker GL100M
  - pet tracker GL100M
  - GL100M @Track protocol
  - GL100M water resistant
---

# QuecLink - GL100M Features

This page provides a public feature overview of the QuecLink GL100M and how its capabilities are used with Plaspy. It focuses on user-facing functionality and operational behavior that is relevant when the GL100M reports location and events into the Plaspy platform. Compatibility with Plaspy has been confirmed for this model and the examples below describe practical uses and visibility inside Plaspy.

Exact feature availability, behavior, and naming can vary by firmware version, hardware revision, installation method, and the manufacturer's implementation. For device-specific parameters, advanced configuration options, and the latest firmware notes, consult QuecLink documentation and the device release notes before deployment.

## Feature Overview

The GL100M is a compact, high-sensitivity GPS tracker built for tracking vehicles, pets, and portable assets. It combines fast time to first fix and reliable cellular communications to provide periodic location reporting and event-based alerts to a backend platform such as Plaspy. The device is designed for long standby use and basic field resilience.

- Quad-band GSM operation for broad cellular coverage and GPRS reporting
- Fast TTFF and high receive sensitivity for reliable position fixes
- Water resistant housing suitable for varied deployment environments
- Built-in 3D motion sensor to detect movement and trigger alerts
- White OLED display for easy local status readout
- Supports GPRS/GSM data and SMS reporting to backend servers using the embedded @Track protocol

## Core Features of QuecLink - GL100M

- GPS location reporting with fast time to first fix and high receive sensitivity
- Quad-band GSM support for global cellular connectivity on common frequency bands
- Embedded @Track protocol for structured reporting to backend platforms
- Support for reporting via GPRS/GSM data channels and SMS messaging
- Built-in 3D motion sensor for motion detection and motion-triggered events
- Low power consumption and extended standby behavior for long term tracking
- Water resistant enclosure for outdoor or exposed installations
- Local white OLED display (128x96) for status and basic information

## How These Features Work with Plaspy

When paired with Plaspy, the GL100M can provide continuous operational visibility by reporting position updates and event notifications to a Plaspy server. Plaspy automatically detects the tracker protocol and can accept GL100M reports sent over standard transport options supported by the device.

- Periodic GPS position reports appear in Plaspy as location updates for the tracked unit
- Motion sensor events can be surfaced as movement or tamper indications in Plaspy dashboards
- Emergency alerts, geo-fence crossings, and low battery notifications reported by the device are visible as events in Plaspy
- The GL100M uses the embedded @Track protocol for structured messages that Plaspy can interpret
- Devices can be configured to report to the Plaspy server domain (for example d.plaspy.com) and Plaspy accepts devices on the common transport used by all Plaspy devices
- Plaspy shows historical positions and scheduled position reports so operators can review routes and uptime

## Typical Use Cases

- Fleet visibility for light vehicles where compact, water resistant tracking is required
- Portable asset tracking where long standby and periodic reporting are needed
- Pet tracking applications that need a small, sensitive GPS device with motion alerts
- Remote monitoring setups that rely on SMS fallback or GPRS reporting to a central server
- Integrations where system integrators use the @Track protocol to feed custom platforms and middleware

## Feature Availability Notes

- Feature behavior depends on device firmware version and hardware revision; not all features may be present on every unit
- Some event types and message formats are configurable on the device and may vary by region or distributor configuration
- Installation method and antenna placement affect GPS sensitivity and TTFF in the field
- Manufacturer certifications and radio band support may vary by regional units or shipments
- For advanced protocol or message customization, consult QuecLink protocol documentation and release notes

## Why Use Plaspy with These Features

Using the QuecLink GL100M with Plaspy gives organizations a straightforward way to collect location data, motion events, and standard alerts from a compact tracker. Plaspy provides centralized visibility, historical playback, and event handling so teams can operationalize periodic reports, motion triggers, and emergency notifications from devices like the GL100M.

To learn more about how Plaspy can receive and manage reports from the GL100M, visit https://www.plaspy.com. For the most current device specifications, firmware details, and protocol documentation, verify information with the manufacturer at https://www.queclink.com/ .
